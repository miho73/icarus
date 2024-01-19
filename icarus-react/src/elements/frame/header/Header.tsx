import React from 'react';
import ProjectSelector from "./ProjectSelector";

function Header(props: { currentTab: number, setCurrentTab: (tab: number) => void }) {
  return (
    <header className={'h-[45px] bg-neutral-800 text-neutral-200 flex justify-end align-middle divide-x divide-neutral-700 text-sm'}>
      <ProjectSelector/>

      <button
        className={'px-4 transition motion-reduce:transition-none hover:bg-neutral-700' + (props.currentTab === 0 ? ' bg-neutral-700' : '')}
        onClick={() => props.setCurrentTab(0)}
      >
        Flight
      </button>

      <button
        className={'px-4 transition motion-reduce:transition-none hover:bg-neutral-700' + (props.currentTab === 1 ? ' bg-neutral-700' : '')}
        onClick={() => props.setCurrentTab(1)}
      >
        Preflight
      </button>
    </header>
  );
}

export default Header;
