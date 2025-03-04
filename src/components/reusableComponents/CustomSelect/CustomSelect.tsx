import { IGeneralSelectProps, TOption } from "./types.ts";
import { FC, useEffect, useRef, useState } from "react";
import {
  Arrow,
  NoOptions,
  OptionItem,
  OptionsList,
  SearchInput,
  SelectAllLabel,
  SelectDropdown,
  SelectHeader,
  SelectWrapper,
} from "./styles.ts";
import useDocumentEvent from "../../../hooks/useDocumentEvent.ts";

export const CustomSelect: FC<IGeneralSelectProps> = ({
  options,
  isMulti = false,
  placeholder = "Select an option",
  value,
  onChange,
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectAllRef = useRef<HTMLInputElement>(null);

  useDocumentEvent("mousedown", (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  });

  useEffect(() => {
    if (isMulti && selectAllRef.current) {
      const currentValue = Array.isArray(value) ? value : [];
      const isAllSelected = currentValue.length === options.length;
      const isSomeSelected =
        currentValue.length > 0 && currentValue.length < options.length;

      selectAllRef.current.checked = isAllSelected;
      selectAllRef.current.indeterminate = isSomeSelected;
    }
  }, [value, options, isMulti, selectAllRef.current]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSingleSelect = (option: TOption) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleMultiSelect = (option: TOption) => {
    const currentValue = Array.isArray(value) ? value : [];
    const isSelected = currentValue.some((item) => item.value === option.value);
    if (isSelected) {
      onChange(currentValue.filter((item) => item.value !== option.value));
    } else {
      onChange([...currentValue, option]);
    }
  };

  const handleSelectAll = () => {
    const currentValue = Array.isArray(value) ? value : [];
    if (currentValue.length === options.length) {
      onChange([]);
    } else {
      onChange([...options]);
    }
  };

  const getDisplayValue = () => {
    if (!value || (Array.isArray(value) && value.length === 0))
      return placeholder;
    if (isMulti && Array.isArray(value)) {
      return value.map((item) => item.label).join(", ");
    }
    return (value as TOption).label;
  };

  return (
    <SelectWrapper ref={wrapperRef}>
      <SelectHeader
        onClick={() => {
          setIsOpen(!isOpen);
          setSearch("");
        }}
      >
        <span>{getDisplayValue()}</span>
        <Arrow isOpen={isOpen}>▼</Arrow>
      </SelectHeader>
      {isOpen && (
        <SelectDropdown>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
          {isMulti && (
            <SelectAllLabel>
              <input
                type="checkbox"
                ref={selectAllRef}
                onChange={handleSelectAll}
              />
              Select All
            </SelectAllLabel>
          )}
          <OptionsList>
            {filteredOptions.length === 0 ? (
              <NoOptions>No options found</NoOptions>
            ) : (
              filteredOptions.map((option) => (
                <OptionItem
                  key={option.value}
                  onClick={() =>
                    isMulti
                      ? handleMultiSelect(option)
                      : handleSingleSelect(option)
                  }
                >
                  {isMulti && (
                    <input
                      type="checkbox"
                      checked={
                        Array.isArray(value) &&
                        value.some((item) => item.value === option.value)
                      }
                      readOnly
                    />
                  )}
                  {option.label}
                </OptionItem>
              ))
            )}
          </OptionsList>
        </SelectDropdown>
      )}
    </SelectWrapper>
  );
};
