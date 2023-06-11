/* eslint-disable no-shadow */
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import NoteAppBody from './components/NoteAppBody';
import NoteAppHeader from './components/NoteAppHeader';
import {
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes, getArchivedNotes, getUserLogged, putAccessToken, unarchiveNote,
} from './utils/network-data';
import ThemeContext from './contexts/ThemeContext';

function NoteApps() {
  const [notes, setNotes] = useState([]);
  const [archives, setArchives] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => searchParams.get('keyword') || '');
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [trigger, setTrigger] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';

      localStorage.setItem('theme', newTheme);

      return newTheme;
    });
  };

  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  useEffect(() => {
    async function getAuthedUser() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }

    getAuthedUser();
  }, []);

  useEffect(() => {
    async function getInitialNotes() {
      const { error: errorActive, data: activeNotes } = await getActiveNotes();
      const { error: errorArchive, data: archivedNotes } = await getArchivedNotes();
      if (!errorActive && !errorArchive) {
        setNotes(activeNotes);
        setArchives(archivedNotes);
      } else {
        setNotes([]);
        setArchives([]);
      }
      setIsLoading(false);
    }

    getInitialNotes();
  }, [trigger]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const onLoginSuccessHandlerEvent = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
    setIsLoading(true);
    setTrigger([]);
  };

  const onLogoutHandlerEvent = async () => {
    putAccessToken('');
    setAuthedUser(null);
    setNotes([]);
    setArchives([]);
    navigate('/login');
  };

  const onAddNoteHandlerEvent = async ({ title, body }) => {
    await addNote({ title, body });
    setTrigger([]);
    navigate('/');
  };

  const onDeleteHandlerEvent = async (id) => {
    await deleteNote(id);
    setTrigger([]);
  };

  const onArchiveHandlerEvent = async (id) => {
    await archiveNote(id);
    setTrigger([]);
  };

  const onMoveHandlerEvent = async (id) => {
    await unarchiveNote(id);
    setTrigger([]);
  };

  const onSearchNoteHandlerEvent = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const filteredNotes = notes
    .filter((note) => note.title.toUpperCase().includes(keyword.toUpperCase()));

  const filteredArchives = archives
    .filter((archive) => archive.title.toUpperCase().includes(keyword.toUpperCase()));

  if (initializing) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="loading-indicator__display">
        <Oval
          ariaLabel="loading-indicator"
          height={40}
          width={40}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible
          secondaryColor="#4fa94d"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
        <p>Loading</p>
      </div>

    );
  }

  return (
    <div>
      <ThemeContext.Provider value={themeContextValue}>
        <NoteAppHeader sitetitle="MyNotes" archivePage="Archives" onLogout={onLogoutHandlerEvent} authedUser={authedUser} />
        <NoteAppBody
          keyword={keyword}
          notes={filteredNotes}
          archives={filteredArchives}
          onDelete={onDeleteHandlerEvent}
          onArchive={onArchiveHandlerEvent}
          onMove={onMoveHandlerEvent}
          onSearch={onSearchNoteHandlerEvent}
          authedUser={authedUser}
          loginSuccess={onLoginSuccessHandlerEvent}
          onAddNote={onAddNoteHandlerEvent}
        />
      </ThemeContext.Provider>

    </div>
  );
}

export default NoteApps;
