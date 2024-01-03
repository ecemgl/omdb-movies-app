import { ColumnsType } from 'antd/es/table'
import { TGetMoviesParameters, TMovie } from '../types'
import Styled from 'styled-components'
import { Button, Checkbox, Col, DatePicker, Input, Row } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { Key } from 'react'
import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'
const SCFilterDropdownTopContainer = Styled.div`
    padding: 8px;
    border-bottom: 1px solid #f0f0f0;
`
const SCFilterDropdownButtonContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    padding: 7px ;
    overflow: hidden;
    border-top: 1px solid #f0f0f0;
`
const SCFilterDropdownValuesContainer = Styled(Row)`
    flex-direction: column;
    justify-content: space-between;
    padding: 10px ;
    overflow: hidden;
    border-top: 1px solid #f0f0f0;
`

export const columns = (filters: TGetMoviesParameters): ColumnsType<TMovie> => [
  {
    title: 'Title',
    dataIndex: 'Title',
    key: 'Title',
    width: '20%',
    render: (_, record) => {
      return <Link to={'movies/' + record.imdbID}>{record.Title}</Link>
    },
    defaultFilteredValue: [filters.title],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div onKeyDown={(e) => e.stopPropagation()}>
        <SCFilterDropdownTopContainer>
          <Input
            placeholder={`Search Title`}
            defaultValue={'pokemon'}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => {}}
            style={{ marginBottom: 8, display: 'block' }}
          />
        </SCFilterDropdownTopContainer>
        <SCFilterDropdownButtonContainer>
          <Button
            type="link"
            onClick={() => {
              clearFilters && clearFilters()
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="primary"
            disabled={isEmpty(selectedKeys)}
            onClick={() => {
              confirm()
            }}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
        </SCFilterDropdownButtonContainer>
      </div>
    ),
    filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
  },
  {
    title: 'Year',
    dataIndex: 'Year',
    key: 'Year',
    width: '20%',
    defaultFilteredValue: (filters.year ? [filters.year] : false) as any,
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
      return (
        <div>
          <SCFilterDropdownTopContainer>
            <DatePicker
              style={{ marginBottom: 8, width: '100%' }}
              picker="year"
              onOk={() => confirm()}
              value={!isEmpty(selectedKeys) ? dayjs(selectedKeys[0].toString()) : null}
              onChange={(date) => {
                if (date) setSelectedKeys([dayjs(date).format('YYYY')])
                else setSelectedKeys([])
              }}
            />
          </SCFilterDropdownTopContainer>
          <SCFilterDropdownButtonContainer>
            <Button
              type="link"
              onClick={() => {
                setSelectedKeys([])
              }}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
            <Button
              type="primary"
              onClick={() => {
                confirm()
              }}
              size="small"
              style={{ width: 90 }}
            >
              Ok
            </Button>
          </SCFilterDropdownButtonContainer>
        </div>
      )
    },
  },
  {
    title: 'Type',
    dataIndex: 'Type',
    key: 'Type',
    filters: [
      { text: 'Movies', value: 'movie' },
      { text: 'Series', value: 'series' },
      { text: 'Episode', value: 'episode' },
    ],
    defaultFilteredValue: (filters.types ? [filters.types] : false) as any,
    filterDropdown: ({ filters, setSelectedKeys, selectedKeys, confirm }) => {
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Checkbox.Group value={selectedKeys as CheckboxValueType[]}>
            <SCFilterDropdownValuesContainer>
              {filters?.map((e, i) => {
                return (
                  <Col key={i}>
                    <Checkbox
                      value={e.value}
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSelectedKeys([e.value as Key])
                        } else {
                          setSelectedKeys([...selectedKeys.filter((key) => key !== e.value)])
                        }
                      }}
                    >
                      {e.text}
                    </Checkbox>
                  </Col>
                )
              })}
            </SCFilterDropdownValuesContainer>
          </Checkbox.Group>
          <SCFilterDropdownButtonContainer>
            <Button
              type="link"
              onClick={() => {
                setSelectedKeys([])
              }}
              size="small"
            >
              Reset
            </Button>
            <Button
              type="primary"
              onClick={() => {
                confirm()
              }}
              size="small"
            >
              Ok
            </Button>
          </SCFilterDropdownButtonContainer>
        </div>
      )
    },
  },
  {
    title: 'Imdb ID',
    dataIndex: 'imdbID',
    key: 'imdbID',
    width: '30%',
  },
]
