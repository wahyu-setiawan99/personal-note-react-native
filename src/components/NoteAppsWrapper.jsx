/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-shadow */
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteApps from './NoteApps';

function NoteAppsWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <NoteApps defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

export default NoteAppsWrapper;
