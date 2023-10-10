import { HomeOutlined } from '@ant-design/icons';
import React from 'react';
import { Breadcrumb } from 'antd';

const data = [
    {
        url: '/index',
        title: 'Thống kế phim',
    },
    {
        url: '/cinema-complex',
        title: 'Cụm rạp',
    },
    {
        url: '/cinema',
        title: 'Rạp',
    },
    {
        url: '/cinema-type',
        title: 'Loại rạp',
    },
    {
        url: '/province',
        title: 'Thống kế phim',
    },
    {
        url: '/movie',
        title: 'Phim',
    },
    {
        url: '/movie-studio',
        title: 'Hãng phim',
    },
    {
        url: '/showtime',
        title: 'Suất chiếu',
    },
    {
        url: '/actor',
        title: 'Diễn viên',
    },
    {
        url: '/director',
        title: 'Dạo diễn',
    },
    {
        url: '/seat',
        title: 'Ghế',
    },
    {
        url: '/seat-type',
        title: 'Loại ghế',
    },
    {
        url: '/combo',
        title: 'Thức ăn & đồ uống',
    },
    {
        url: '/discount',
        title: 'Giảm giá',
    },
    {
        url: '/event',
        title: 'Sự kiện',
    },
    {
      url: '/account',
      title: 'Quản lý người dùng',
  },
];

const Bread = ({ path }) => {
    const matchingItem = data.find((item) => path.endsWith(item.url));

    const breadcrumbItems = [
        {
            title: <HomeOutlined />,
        },
        {
            title: 'Admin',
        }
    ];

    if (matchingItem) {
        const titles = Array.isArray(matchingItem.title) ? matchingItem.title : [matchingItem.title];

        titles.forEach((title) => {
            breadcrumbItems.push({
                title: <span>{title}</span>,
            });
        });
    }

    return <Breadcrumb items={breadcrumbItems} />;
};

export default Bread;