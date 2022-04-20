import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((el, index) => {
        return <option key={index}>{el}</option>

    }) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        let currentValue = e.currentTarget.value
        if(onChangeOption) {
            switch (currentValue) {
                case 'x': return  onChangeOption('x')
                case 'y': return  onChangeOption('y')
                case 'z': return  onChangeOption('z')
                }
            }
        }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
