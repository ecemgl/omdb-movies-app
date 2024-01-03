import { useParams } from 'react-router-dom'
import { Col, Divider, Progress, Result, Row, Tag, Typography } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import { styled } from 'styled-components'
import { useGetMovieDetailQuery } from '../services/movie'

const { Title } = Typography

const MovieDetailTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: black;
`
const MovieDetailOverviewTitle = styled.div`
  fontsize: 16px;
  font-weight: bold;
  color: #696969;
`
const MovieDetailOverview = styled.div`
  fontsize: 16px;
  color: #696969;
`

const MovieDetailRateAndPlay = styled.div`
  display: flex;
  gap: 50px;
  color: #696969;
  alignitems: center;
`

const MovieDetailPlayIcon = styled.div`
  display: flex;
  alignitems: center;
  gap: 10px;
`
const MovieDetailText = styled.div`
  color: black;
`

const MovieDetail = () => {
  const { movieId } = useParams()
  const { data: movieDetail, isError, isLoading } = useGetMovieDetailQuery(movieId)
  if (isError)
    return <Result status="error" title="There are some problems with your operation. Please refresh the page." />
  if (isLoading) return <>Loading...</>
  if (!movieDetail) return <>No Movies Found</>
  return (
    <>
      {movieDetail && (
        <Row>
          <Col span={5} offset={1}>
            <img src={movieDetail.Poster} alt="poster" width="85%" />
          </Col>
          <Col span={15} offset={1}>
            <MovieDetailTitle>{movieDetail.Title}</MovieDetailTitle>
            <Divider />
            <MovieDetailOverviewTitle>Description:</MovieDetailOverviewTitle>
            <MovieDetailOverview>{movieDetail.Plot}</MovieDetailOverview>
            <Divider />
            <div>
              {movieDetail.Genre.split(',').map((genre: string) => (
                <Tag color="geekblue">{genre}</Tag>
              ))}
            </div>
            <Divider />
            <MovieDetailRateAndPlay>
              <Progress
                type="circle"
                percent={movieDetail.imdbRating * 10}
                format={(percent) => `${percent && percent / 10} `}
              />
              <MovieDetailPlayIcon>
                <PlayCircleOutlined style={{ fontSize: '850%', color: 'gray' }} />
                <Title level={5}>Watch Trailer !</Title>
              </MovieDetailPlayIcon>
            </MovieDetailRateAndPlay>
            <Divider />
            <MovieDetailText>
              <Title level={5}>Director</Title>
              {movieDetail.Director}
              <Divider />
              <Title level={5}>Actors</Title>
              {movieDetail.Actors}
              <Divider />
              <Title level={5}>Awards</Title>
              {movieDetail.Awards}
            </MovieDetailText>
            <Divider />
          </Col>
        </Row>
      )}
    </>
  )
}

export default MovieDetail
