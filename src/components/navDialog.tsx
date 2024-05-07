import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { setLanguage } from '../store/languageSlice';
import { useState } from 'react';
import { Dialog, Disclosure } from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
// import { useMenu } from '../context/menuContext'
import { useStaticQuery, graphql } from 'gatsby';

const NavDialog: React.FC = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  callsToAction,
  products,
}) => {
  const { author } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      author: wpUser {
        firstName
        twitter: name
        description
        avatar {
          url
        }
      }
    }
  `);
  const language = useSelector((state: RootState) => state.language.language);
  const dispatch = useDispatch<AppDispatch>();
  const langBtnClassEn = `lang_btn_en __${language === 'en' ? 'en' : 'ja'}`;
  const langBtnClassJa = `lang_btn_ja __${language === 'en' ? 'en' : 'ja'}`;

  const avatarUrl = author?.avatar?.url;

  const avatarImgUrl = '../images/600x600.jpg';
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className='fixed inset-0 z-10'>
          <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5 flex'>
                <span className='sr-only'>Norika Okawa</span>
                {avatarUrl && (
                  <img
                    alt={author?.firstName || ``}
                    className='bio-avatar h-8 w-auto'
                    src={avatarImgUrl}
                  />
                )}
                <span className='pt-1 text-base font-semibold'>
                  Norika Okawa
                </span>
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    About
                  </a>
                  <Disclosure as='div' className='-mx-3'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                          Works
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'rotate-180' : '',
                              'h-5 w-5 flex-none'
                            )}
                            aria-hidden='true'
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='mt-2 space-y-2'>
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as='a'
                              href={item.href}
                              className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Blog
                  </a>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Contacts
                  </a>
                </div>
                <div className='sm:flex-1 sm:justify-end py-6'>
                  <div className='font-semibold leading-6 text-gray-900'>
                    <button
                      className={langBtnClassEn}
                      onClick={() => dispatch(setLanguage('en'))}
                    >
                      EN
                    </button>{' '}
                    <span className='mx-2'> / </span>
                    <button
                      className={langBtnClassJa}
                      onClick={() => dispatch(setLanguage('ja'))}
                    >
                      JA
                    </button>
                  </div>
                </div>
                {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    EN / JA
                  </a>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default NavDialog;
