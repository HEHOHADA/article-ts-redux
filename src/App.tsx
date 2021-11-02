import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Filter, Articles } from 'ui/article'
import { setData } from 'store/article'

import mockData from './MOCK_DATA.json'

export function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setData(mockData))
  }, [])

  return (
    <main className='h-screen w-10/12 m-auto mt-10'>
      <div className='flex w-full h-full max-h-cal content-area rounded-b'>
        <div className='w-1/5 h-screen relative hidden xl:block'>
          <div className='flex justify-between'>
            <h2 className='mt-1 mr-1 text-blue-200'>Articles</h2>
          </div>
          <Filter />
        </div>
        <Articles />
      </div>
    </main>
  )
}
