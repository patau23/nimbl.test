import classNames from "classnames";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import './App.css'

function App() {

  return (
    <>
      <div className="flex h-full bg-fullblack p-6">
        {/* Боковая панель */}
        <aside className="relative flex-shrink-0 min-w-64">
          <div className="relative h-screen border-[1px] border-fullgrey bg-semiblack p-[7px] rounded-[25px] mr-4">
            <div className='mt-[20px] mb-[20px]'>
              <img src="/images/logo.svg" alt="" className='w-80' />
            </div>

            <Disclosure as="div" className="mb-4 relative">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={classNames(
                      "flex justify-between items-center gap-3 w-full px-4 py-2 text-sm font-medium text-left text-white bg-fullgrey rounded-lg hover:opacity-50 focus:outline-none",
                      open ? 'border-b-0' : ''
                    )}
                  >
                    <div className="flex gap-3">
                      <img src="/images/carbon_circle-filled.svg" alt="" />
                      <div>
                        <h6 className=''>Machine Learning and AI</h6>
                        <span className='text-opacity-50 text-white'>Модуль 1</span>
                      </div>
                    </div>
                    <ChevronUpIcon
                      className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="">
                    <ul className="rounded-[10px] px-4 pt-4 pb-2 text-sm text-gray-300 bg-fullgrey">
                      <li className="py-1 hover:text-white cursor-pointer">1. Introduction and History of ML/AI</li>
                      <li className="py-1 hover:text-white cursor-pointer">2. Types of Machine Learning</li>
                      <li className="py-1 hover:text-white cursor-pointer">3. Supervised vs Unsupervised Learning</li>
                      <li className="py-1 hover:text-white cursor-pointer">4. Reinforcement Learning</li>
                      <li className="py-1 hover:text-white cursor-pointer">5. CRISP-DM Methodology</li>
                      <li className="py-1 hover:text-white cursor-pointer">6. Model Selection Process</li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <button className="px-4 py-2 text-left text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none w-full">
              Модуль 2
            </button>
            <button className="mt-2 px-4 py-2 text-left text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none w-full">
              Модуль 3
            </button>

            <div className="absolute w-full bottom-[0] p-[18px]">
              <div className="border-b-[1px] w-full" />
              <div className="mt-6 p-3 flex flex-col gap-5 text-white">
                <button className="flex gap-2">
                  <img src="/images/settings.svg" alt="" className='' />
                  <span>Настройки</span>
                </button>
                <button className="flex gap-2">
                  <img src="/images/logout.svg" alt="" className='' />
                  <span>Выйти</span>
                </button>
              </div>
            </div>
          </div>
        </aside >

        {/* Основной контент */}

        < section className="flex flex-col h-auto border-[1px] border-fullgrey bg-semiblack rounded-[25px] p-6" >
          <h1 className="text-3xl text-white font-semibold mb-[54px] text-center">
            Модуль 1: Introduction and History of ML/AI
          </h1>

          <div className="flex items-center justify-center mb-6">
            <img
              src="/images/close-up-businessman-with-digital-tablet.png"
              alt="ML/AI"
              className="rounded-lg w-full h-[600px]"
            />
          </div>

          <div className="flex flex-1 justify-between items-start gap-4">
            <div className="h-[200px] overflow-y-auto text-[16px] text-gray-300 text-sm bg-fullgrey rounded-[10px] p-4 mb-6">
              <h6 className="font-bold mb-3">Описание</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            <button className="w-[150px] bg-purple text-white px-4 py-2 rounded-lg hover:bg-purple-700 focus:outline-none">
              Практика
            </button>
          </div>
        </section >
      </div >
    </>
  )
}

export default App
