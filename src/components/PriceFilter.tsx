import { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface PriceChangeParams {
    priceRange: {from: string, to: string}
    setPriceRange: Dispatch<SetStateAction< {
        from: string;
        to: string;
    }>>
}

export const PriceFilter = ({priceRange, setPriceRange}: PriceChangeParams) => {
    //function to maintain changes in price filters
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        let target = e.target
        //if input is empty set filtering to none
        if (value === '') {
            value = target.name === 'from' ? '0' : '99999'
        }
        //input cannot be longer than 5 elements and less than 0
        if (value.length <= 5 && parseInt(value) >= 0) {
            //tracking input state
            setPriceRange(prevState => ({...prevState, [e.target.name]: e.target.value}))
        }
    }
    return (
        <div className="filters--type">
            От
            <input type="number" name="from" value={priceRange.from} onChange={handleChange} />
            До
            <input type="number" name="to" value={priceRange.to} onChange={handleChange} />
        </div>
    )
}
