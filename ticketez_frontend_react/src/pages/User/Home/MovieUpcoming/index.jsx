/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './movieUpcoming.module.scss';
import Slider from 'react-slick';
import { Col, Modal, Row, Tag, Typography } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MovieShowingUserAPI } from '~/api/user/carousel';
import funcUtils from '~/utils/funcUtils';
import { CloseCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import img from '~/assets/img';

const cx = classNames.bind(style);
const { Paragraph, Title } = Typography;

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={cx('control-btn')} onClick={onClick}>
            <button className={cx('next')}>
                <i class="fa fa-chevron-right"></i>
            </button>
        </div>
    );
};
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={cx('control-btn')} onClick={onClick}>
            <button className={cx('prev')}>
                <i class="fa fa-chevron-left"></i>
            </button>
        </div>
    );
};

const MovieShowing = () => {
    const [getMovieByShowtimeShowing, setGetMovieByShowtimeShowing] = useState(null);
    useEffect(() => {
        //đổ dữ liệu
        const getMovieByShowtimeShowing = async () => {
            try {
                const [movie] = await Promise.all([MovieShowingUserAPI.getMovieUpcoming()]);
                setGetMovieByShowtimeShowing(movie.listMovieObjResp);
            } catch (error) {
                funcUtils.notify(error.response.data, 'error');
            }
        };
        getMovieByShowtimeShowing();
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    console.log(selectedMovie);
    const [setLoading] = useState(false);
    const [ellipsis] = useState(true);

    const showModal = (movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setLoading(true);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedMovie(null);
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    initialSlide: 5,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const getColorForRating = (ratingCode) => {
        switch (ratingCode) {
            case 'NC-17':
                return '#D80032';
            case 'R':
                return '#FFCD4B';
            case 'PG-13':
                return '#FF9B50';
            case 'PG':
                return '#7A9D54';
            case 'G':
                return '#1A5D1A';
            default:
                return '#f50';
        }
    };
    const CustomCloseIcon = ({ onClick }) => (
        <CloseCircleOutlined
            onClick={onClick}
            style={{ fontSize: '30px', color: 'gray', marginTop: '-55px', marginRight: '-55px' }}
        />
    );
    const [isLoadingPage, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
    return (
        <div className={cx('body')}>
            <span className={cx('title-name-card')}>Phim sắp chiếu</span>

            {isLoadingPage && (
                <div style={{ height: '100px' }}>
                    <div className={cx('loading')}>
                        <LoadingOutlined className={cx('imgL')} />
                    </div>
                </div>
            )}
            {!isLoadingPage && (
                <Slider
                    {...settings}
                    style={{
                        maxWidth: '1300px',
                        alignItems: 'center',
                        display: 'flex',
                        margin: '0 auto',
                        marginTop: '-20px',
                    }}
                >
                    {getMovieByShowtimeShowing && getMovieByShowtimeShowing.length > 0 ? (
                        getMovieByShowtimeShowing?.map((slide, index) => (
                            <>
                                <div key={slide.movie.id} className={cx('container')}>
                                    <Tag
                                        className={cx('tag-overlay')}
                                        color={getColorForRating(slide.movie.mpaaRating.ratingCode)}
                                    >
                                        {slide.movie.mpaaRating.ratingCode}
                                    </Tag>

                                    {/* <Tag color="#D80032" className={cx('tag-overlay2')}>
                                                <FontAwesomeIcon icon={faTicket} /> ĐẶT TRƯỚC
                                             </Tag> */}
                                    <img
                                        className={cx('img-overlay')}
                                        src={`http://localhost:8081/api/upload/${slide.movie.poster}`}
                                    />
                                    <svg
                                        onClick={() => showModal(slide)}
                                        className={cx('icon-overlay')}
                                        fill="#ffffff"
                                        height="200px"
                                        width="200px"
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="-51.2 -51.2 614.40 614.40"
                                        xmlSpace="preserve"
                                        stroke="#ffffff"
                                        strokeWidth="0.00512"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#CCCCCC"
                                            strokeWidth="1.024"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <g>
                                                <g>
                                                    <path d="M256,0C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0z M256,496C123.664,496,16,388.336,16,256S123.664,16,256,16s240,107.664,240,240S388.336,496,256,496z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <polygon points="189.776,141.328 189.776,370.992 388.672,256.16"></polygon>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <Title level={5} className={cx('name-movie')} style={{ color: '#000' }}>
                                        {slide.movie.title} <br />
                                        <span className={cx('the-loai-phim')} style={{ color: '#000' }}>
                                            {slide.genres.map((valueGenre, index) => (
                                                <span className={cx('span')} key={index}>
                                                    {valueGenre.name}
                                                </span>
                                            ))}
                                        </span>
                                        <br />
                                    </Title>
                                </div>
                            </>
                        ))
                    ) : (
                        <div style={{ marginLeft: '100px' }}>
                            <img src={img.notFoundLogo} alt="" style={{ marginRight: '-300px', marginTop: '15px' }} />
                            <span style={{ marginTop: '60px', marginLeft: '100px' }}>
                                Không tìm thấy phim sắp chiếu
                            </span>
                        </div>
                    )}
                </Slider>
            )}

            <Modal
                width={700}
                closeIcon={<CustomCloseIcon />}
                onOk={handleOk}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[
                    <>
                        <Row gutter={24}>
                            <Col lg={3}>
                                {selectedMovie ? (
                                    <img
                                        width={80}
                                        height={120}
                                        className={cx('img-modal')}
                                        src={`http://localhost:8081/api/upload/${selectedMovie.movie.poster}`}
                                    />
                                ) : (
                                    ''
                                )}
                            </Col>
                            <Col lg={21} className={cx('name-video-modal')}>
                                <Title level={5}>
                                    {selectedMovie ? selectedMovie.movie.title : ''} - {''}
                                    <span className={cx('theloai-modal')}>
                                        {selectedMovie?.genres.map((valueGenre, index) => (
                                            <span className={cx('span')} key={index}>
                                                {valueGenre.name}
                                            </span>
                                        ))}
                                    </span>{' '}
                                    <br />
                                </Title>
                                <Paragraph
                                    ellipsis={
                                        ellipsis
                                            ? {
                                                  rows: 4,
                                              }
                                            : false
                                    }
                                    style={{ color: 'gray' }}
                                >
                                    {selectedMovie ? selectedMovie.movie.description : ''}
                                </Paragraph>
                            </Col>
                        </Row>
                    </>,
                ]}
            >
                <iframe
                    style={{
                        width: '107.5%',
                        height: '400px',
                        border: 'none',
                        borderTopLeftRadius: '3px',
                        marginLeft: '-24px',
                        marginTop: '-24px',
                    }}
                    src={selectedMovie ? selectedMovie.movie.videoTrailer : ''}
                    title={selectedMovie ? selectedMovie.movie.title : ''}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </Modal>
        </div>
    );
};

export default MovieShowing;
