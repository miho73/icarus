import { ReactComponent as ArrowDown } from "../../../assets/icons/arrow-down.svg";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as Folder } from "../../../assets/icons/folder.svg";
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";

function ProjectSelector() {
  return (
    <div className={'grid grid-rows-[45px_1fr] mr-2'}>
      <Menu>
        <Menu.Button className={'px-2 py-1 my-2 rounded-lg flex justify-center items-center hover:bg-neutral-700'}>
          Choose a project
          <ArrowDown className={'w-5 h-5 fill-current'}/>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={'p-1 mt-1 bg-neutral-800 rounded-lg border border-neutral-700 flex flex-col'}>
            <Menu.Item>
              <button className={'flex gap-4 p-1 hover:bg-blue-800 items-center rounded'}>
                <Plus className={'w-4 h-4 fill-current'}/>
                New Project
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className={'flex gap-4 p-1 hover:bg-blue-800 items-center rounded'}>
                <Folder className={'w-4 h-4 fill-current'}/>
                Open
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default ProjectSelector;
