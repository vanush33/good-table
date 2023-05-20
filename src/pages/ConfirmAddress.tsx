import { ChangeEvent, useEffect, useState } from 'react'
import './styles/ConfirmAddress.scss'
import { Link } from 'react-router-dom'

interface ICountry {
  country: string
  cities: string[]
}
interface ISelectedCountry {
  country: string
  city: string
}

export const ConfirmAddress = () => {
  const [countries, setCountries] = useState<ICountry[]>([])
  const [formData, setFormData] = useState<ISelectedCountry>({ country: '', city: '' })
  const [availableCities, setAvailableCities] = useState<string[]>([])

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then(res => res.json())
      .then(data => setCountries(data.data))
  }, [])

  const handleChangeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
    const countryCities = countries.find(item => item.country === event.target.value)
    if (countryCities) {
      setAvailableCities(countryCities.cities)
    }
    else {
      setAvailableCities([])
    }
  }
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  return (
    <>
      <div className="container">
        <div className="confirmAddress">
          <h2 className="heading main-heading">Адрес доставки</h2>
          <form action="" className='confirmAddress--form'>
            <select value={formData.country} onChange={(event) => { handleChangeCountry(event); handleChange(event) }} name="country" className='confirmAddress--country' placeholder='Страна'>
              {
                countries.map(country => <option>{country.country}</option>)
              }
            </select>
            <select value={formData.city} onChange={handleChange} name='city' className='confirmAddress--city'>
              {
                availableCities.map(city => <option>{city}</option>)
              }
            </select>
            <input type="text" className='confirmAddress--address' placeholder='Адресс' />
            <div className="confirmAddress--buttons">
              <Link to={'/shop'}><button className="button button--secondary">К покупкам</button></Link>
              <Link to={'/confirmData'}><button className="button button--accent">Продолжить</button></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
