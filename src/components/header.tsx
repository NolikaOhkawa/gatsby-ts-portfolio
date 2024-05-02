import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store/store'
import { setLanguage } from '../store/languageSlice'
import { Link, useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'
import { Bars3Icon, CodeBracketIcon, GiftIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import NavDialog from './navDialog'

interface HeaderProps {
  isHomePage: boolean
  title: string
}

const products = [
  {
    name: 'Engineering',
    description: 'open source - view GitHub',
    href: 'https://github.com/NolikaOhkawa',
    icon: CodeBracketIcon,
  },
  { name: 'Products', description: 'Varioius products for web industry ', href: '/products', icon: GiftIcon },
  {
    name: 'Illustration',
    description: 'Have some fun!',
    href: 'https://www.instagram.com/happyyyylemon/',
    icon: PencilSquareIcon,
  },
]

const callsToAction = [
  // { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact', href: '#', icon: PhoneIcon },
]

const Header: React.FC<HeaderProps> = ({ isHomePage, title }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const language = useSelector((state: RootState) => state.language.language)
  const dispatch = useDispatch<AppDispatch>()

  const langBtnClassEn = `lang_btn_en __${language === 'en' ? 'en' : 'ja'}`
  const langBtnClassJa = `lang_btn_ja __${language === 'en' ? 'en' : 'ja'}`

  return (
    <header className="global-header bg-white sticky top-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          {/* <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a> */}
          {isHomePage ? (
            <h1 className="main-heading">
              <Link to="/" className="-m-1.5 p-1.5">
                {parse(title)}
              </Link>
            </h1>
          ) : (
            <Link className="header-link-home" to="/">
              {title}
            </Link>
          )}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="testClass -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Works
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map(item => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid divide-x divide-gray-900/5 bg-gray-50">
                  {/* {callsToAction.map(item => ( */}
                  <a
                    key={callsToAction[0].name}
                    href={callsToAction[0].href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <PhoneIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    {callsToAction[0].name}
                  </a>
                  {/* ))} */}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link to="/blog" className="text-sm font-semibold leading-6 text-gray-900">
            Blog
          </Link>
          <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
            Contact
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="text-sm font-semibold leading-6 text-gray-900">
            <button className={langBtnClassEn} onClick={() => dispatch(setLanguage('en'))}>
              EN
            </button>{' '}
            /{' '}
            <button className={langBtnClassJa} onClick={() => dispatch(setLanguage('ja'))}>
              JA
            </button>
          </div>
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </nav>
      {/* later  */}
      <NavDialog
        products={products}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        callsToAction={callsToAction}
      />
    </header>
  )
}

export default Header
