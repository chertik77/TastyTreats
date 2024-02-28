import type { PrimeReactPTOptions } from 'primereact/api'

import { classNames } from 'primereact/utils'

export const pt: PrimeReactPTOptions = {
  paginator: {
    root: {
      className: 'p-0 dark:bg-transparent'
    },
    firstPageButton: {
      className:
        'bg-dark h-10 min-w-10 text-white/50 mr-1 tablet:h-11 tablet:min-w-11 tablet:mr-2'
    },
    prevPageButton: {
      className:
        'bg-dark h-10 min-w-10 text-white/50 mr-[14px] tablet:h-11 tablet:min-w-11 tablet:mr-6'
    },
    pageButton: props => ({
      className: classNames(
        'h-10 min-w-10 border border-dark/50 text-dark dark:text-light dark:border-white/30 tablet:h-11 tablet:min-w-11',
        props?.context?.active && 'bg-brand !border-brand'
      )
    }),
    pages: { className: 'space-x-[10px]' },
    lastPageButton: {
      className:
        'bg-brand h-10 min-w-10 text-dark ml-1 tablet:h-11 tablet:min-w-11 tablet:ml-2'
    },
    nextPageButton: {
      className:
        'bg-brand h-10 min-w-10 text-dark ml-[14px] tablet:ml-6 tablet:h-11 tablet:min-w-11'
    }
  },
  inputswitch: {
    slider: props => ({
      className: classNames(
        `absolute cursor-pointer inset-0 rounded-full before:absolute before:top-[10.8%]
        before:bg-lighter before:w-4 before:h-4 before:left-[6%] before:rounded-full
        before:transition`,
        {
          'bg-brand before:translate-x-6': props?.props?.checked,
          'bg-switch': !props?.props?.checked
        }
      )
    })
  },
  dropdown: {
    root: {
      className:
        'shadow-none rounded-[15px] border border-dark-20 w-[161px] h-[46px] dark:bg-transparent dark:border-gray-20 mt-2'
    },
    input: {
      className:
        'text-black/50 text-fs-16-lh-125-fw-500 dark:text-white/50 pl-[18px]'
    },
    panel: { className: 'w-5 dark:bg-dark rounded-[14px] pl-[18px] py-[14px]' },
    header: { className: 'dark:bg-dark rounded-t-[14px]' },
    list: { className: 'space-y-2' },
    item: {
      className:
        'text-fs-14-lh-normal-fw-500 text-dark-30 dark:text-gray-30 hover:bg-transparent hover:text-dark dark:hover:text-white p-0 whitespace-normal pr-[18px]'
    },
    wrapper: { className: 'overscroll-none' }
  }
}
