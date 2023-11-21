import { Col, Row, Card, Typography, Breadcrumb } from 'antd';
import { useEffect } from 'react';
import img from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';
import ReviewCard from './ListMovie';


function ReviewMovie() {
    useEffect(() => {

    }, []);
    return (
        <>
        <div className='tw-bg-white tw-text-black tw-w-full tw-h-[40px] tw-flex tw-items-center tw-justify-center tw-mt-5 tw-pl-[50px]'>
        <div className="tw-container tw-mx-auto tw-px-[150px] tw-mt-[-10px] tw-mb-[10px] tw-text-gray-700 tw-font-2xl tw-font-[var(--font-family)]">
                            <Breadcrumb
                                separator=<FontAwesomeIcon icon={faChevronRight} />
                                items={[
                                    {
                                        href: '/',
                                        title: <FontAwesomeIcon icon={faHome} />,
                                        className: '',
                                    },
                                    {
                                        href: '/',
                                        title: (
                                            <>
                                                <span>Cinema</span>
                                            </>
                                        ),
                                    },
                                    {
                                        href: '/review',
                                       
                                        title: (
                                            <>

                                                <span>review</span>
                                            </>
                                        ),
                                    },
                                ]}
                            />
                        </div>
        </div>
            <Row>
                <Col span={24} className='tw-bg-white tw-h-[400px] tw-mt-1 tw-mb-0 tw-justify-center'>
                    <div className="tw-grid tw-grid-rows-3 tw-grid-flow-col tw-gap-3 tw-justify-center tw-h-[300px]">
                        <div className="tw-row-start-2 tw-row-span-2 tw-text-left tw-leading-normal tw-w-[600px]">
                        
                        <h2 className="tw-inline-block tw-rounded-full tw-bg-pink-100
                         tw-px-4 tw-py-1 tw-text-lg tw-tracking-wider tw-text-pink-500">TICKETEZ CINEMA</h2>    
                          <h1 className="tw-text-[32px] tw-font-bold tw-text-gray-900 tw-mt-2">
                          Review Phim chiếu rạp trên TICKETEZ
                         </h1>

                                <p className="tw-mt-1/2 tw-text-[18px] tw-font-normal tw-text-gray-600 tw-mb-1">Nền tảng đánh giá, review phim chiếu rạp uy tín, chất lượng từ các nhà phê bình và hàng triệu người dùng
                                    <span className="tw-text-pink-500">TICKETEZ</span>.
                                </p>
                                <div className="tw-mt-4 tw-grid tw-grid-cols-3 tw-gap-4">
                                    
                                    <div className="tw-mb-1">
                                        <p className="tw-text-[25px] tw-font-bold tw-text-gray-900"><span>368</span>+ </p>
                                        <p className="tw-text-lg tw-text-gray-500">Phim có Review</p>
                                    </div>
                                    <div className="tw-mb-1">
                                        <p className="tw-text-[25px] tw-font-bold tw-text-gray-900">
                                            <span>32</span>K+</p>
                                        <p className="tw-text-lg tw-text-gray-500 tw-md:text-base">Số lượt bình luận</p>
                                    </div>
                                    <div className="tw-mb-1">
                                        <p className="tw-text-[25px] tw-font-bold tw-text-gray-900">
                                            <span>13</span>K+</p>
                                        <p className="tw-text-lg tw-text-gray-500">Người đánh giá</p>
                                    </div>
                                </div>
                            </div>
    
                        <div class="tw-row-start-2 tw-row-span-2">
                            <div className='flex tw-items-end tw-justify-end tw-pr-5'>
                                <img alt="" src={img.anhReview} className="tw-mr-[20px] tw-rounded-lg tw-w-[450px]" />
                            </div>
                        </div>
                    </div>

                </Col>
                <Col
                    span={24}
                    style={{ display: 'flex', justifyContent: 'center', background: 'gray', minHeight: 1000 }}
                >
                    <Row style={{ width: 1088, height: 'auto' }}>
                        <Col span={24}>
                            <Row>
                                <Col span={24} style={{ backgroundColor: '#ffffff', display: 'flex', marginTop: 50, minHeight: 600, }}>
                         <h1 className="tw-text-[32px] tw-font-bold tw-text-gray-900 tw-mt-2 tw-mx-auto tw-float-center">
                          Bình luận nổi bật
                         </h1>
                         <br />       
                         <ReviewCard/>                      
                           </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </>
    );
}

export default ReviewMovie;