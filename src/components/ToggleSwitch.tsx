import React from 'react';

type Props = {
  checked: boolean;
  onChange: (value: boolean) => void;
};

export function ToggleSwitch(props: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChange(!props.checked);
  }

  return (
    <label className="cursor-pointer justify-center flex mt-7">
        <input type="checkbox" onChange={handleChange} checked={props.checked} className="sr-only peer" />
        <div className={' h-8 w-20 rounded-none appearance-none bg-gray-300 dark:bg-gray-500 relative'}>
            <div className={`h-7 w-7 rounded-md transition-all duration-300
                ${
                    props.checked ? "bg-blue-700 dark:bg-blue-500 absolute top-0.5 left-12" : "bg-blue-400 dark:bg-blue-300 absolute top-0.5 left-1"
                }
            `}>
                
            </div>
        </div>
    </label>
  );
  /* inline-block cursor-pointer h-8 w-16 rounded-none appearance-none bg-gray-300 dark:bg-gray-500 relative transition-all
                after:content-[''] after:h-12 after:w-12 after:border-none after:rounded-md after:cursor-pointer after:bg-blue-700 */
}
