import { useEffect, useState } from 'react'
import { isEmpty, toNumber } from 'lodash'
import { Result, Table, TablePaginationConfig } from 'antd'

import { columns } from '../commons/Columns'
import { useGetMoviesQuery } from '../services/movie'
import { TGetMoviesParameters } from '../types'

const initialFilter = {
  page: 1,
  title: 'pokemon',
  year: null,
  types: null,
}

const Movies = () => {
  const savedFilters = sessionStorage.getItem('filters')
  const [filters, setFilters] = useState<TGetMoviesParameters>(savedFilters ? JSON.parse(savedFilters) : initialFilter)
  const { data: movies, refetch, isFetching, isError, isLoading } = useGetMoviesQuery(filters)

  useEffect(() => {
    refetch()
  }, [filters])

  const handleChangeFilters = (pagination: TablePaginationConfig, filters: any) => {
    const filterModel = {
      page: pagination.current ?? 1,
      title: filters.Title,
      year: filters.Year ? filters.Year : null,
      types: filters.Type ?? null,
    }
    setFilters(filterModel)
    sessionStorage.setItem('filters', JSON.stringify(filterModel)) // movie detaile gittikten sonra eski filtrelerden geri dönülebilmesi için
  }

  if (isError)
    return <Result status="error" title="There are some problems with your operation. Please refresh the page." />
  if (isLoading) return <>Loading...</>
  if (isEmpty(movies)) return <>No Movies Found</>
  return (
    <Table
      loading={isFetching}
      dataSource={movies.Search}
      onChange={handleChangeFilters}
      columns={columns(filters)}
      pagination={{
        simple: true,
        total: toNumber(movies.totalResults),
        showTitle: false,
        showSizeChanger: false,
        defaultCurrent: filters.page,
      }}
    />
  )
}

export default Movies
