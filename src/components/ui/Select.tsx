'use client'

import type { QueryKeys } from '@/types/query.types'
import type { DropdownChangeEvent, DropdownProps } from 'primereact/dropdown'
import type { SelectItemOptionsType } from 'primereact/selectitem'

import { Dropdown } from 'primereact/dropdown'
import { classNames } from 'primereact/utils'

import { useQueryParams } from '@/hooks'

import { DropdownIcon } from '.'

type SelectProps = DropdownProps & {
  labelName: 'Time' | 'Area' | 'Ingredients'
  labelClassName?: string
  paramsKey: QueryKeys
  selectOptions: SelectItemOptionsType
}

export const Select = ({
  paramsKey,
  labelName,
  selectOptions,
  ...rest
}: SelectProps) => {
  const { setParams, params } = useQueryParams(paramsKey)

  const handleChange = (e: DropdownChangeEvent) => {
    switch (paramsKey) {
      case 'time':
        return setParams(e.value.slice(0, -4))
      case 'ingredient':
        return setParams(e.value._id)
      case 'area':
        return setParams(e.value)
      default:
        return setParams(e.value)
    }
  }

  return (
    <label
      className={classNames(
        'flex flex-col text-fs-12-lh-normal-fw-400 text-dark-50 dark:text-gray-50',
        labelName === 'Ingredients' && 'max-tablet:mr-auto'
      )}>
      {labelName}
      <Dropdown
        dropdownIcon={<DropdownIcon />}
        onChange={handleChange}
        options={selectOptions}
        placeholder='Any'
        showOnFocus
        value={params}
        {...rest}
      />
    </label>
  )
}
