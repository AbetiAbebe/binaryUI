import styles from '../.././core-courses.module.scss';
import React, { useState } from 'react';
import CheckOutFront from '../../../../../../shared/src/lib/components/checkoutFront/checkoutFront';

import { Space, Table, Tag, Typography, Card, Image } from 'antd';

const { Text } = Typography;

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  courseName: string;
  courseDescription: string;
  courseDuration: string;
  tags: string[];
  price: string|number;
  imageUrl: string;
}

const data: DataType[] = [
  {
    key: '3',
    courseName: 'AI For Business Specialization',
    courseDescription: 'Learn the Fundamentals of AI and Machine Learning.',
    courseDuration: '32 weeks',
    // address: 'Sidney No. 1 Lake Park',
    tags: ['Analytics', 'teacher', 'Fraud Prevention'],
    price: '$24',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg',
  },
];

export const CourseDetail: React.FC = () => (
  <div className={styles['container']}>
    <div className={styles['course-detail-info-section']}>
      <div className={styles['course-detail-head']}>
        <Table
          className={styles['course-item-detail']}
          dataSource={data}
          pagination={false}
          showHeader={false}
        >
          <ColumnGroup className={styles['course-banner']}>
            <Column
              title=""
              key="action"
              render={(_: any, record: DataType) => (
                <Space size="middle">
                  <Image
                    preview={false}
                    width={100}
                    height={100}
                    src={record.imageUrl}
                    key="imageUrl"
                  />
                </Space>
              )}
            />
            <Column
              title=""
              className={styles['course-name-detail']}
              dataIndex="courseName"
              key="courseName"
            />
          </ColumnGroup>
        </Table>
      </div>
      <div className={styles['course-detail-mid']}>
        <Table
          dataSource={data}
          pagination={false}
          showHeader={true}
          className={styles['course-item-detail']}
        >
          <ColumnGroup>
            <Column
              title="Course description"
              className={styles['course-description-detail']}
              dataIndex="courseDescription"
              key="courseDescription"
            ></Column>
            <Column
              title="Course duration"
              className={styles['']}
              dataIndex="courseDuration"
              key="courseDuration"
            ></Column>
          </ColumnGroup>
        </Table>

        <Table
          dataSource={data}
          pagination={false}
          showHeader={true}
          className={styles['course-item-detail']}
        >
          <ColumnGroup>
            <Column
              title="Skills you will gain"
              dataIndex="tags"
              key="tags"
              render={(tags: string[]) => (
                <>
                  {tags.map((tag) => (
                    <Tag color="blue" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </>
              )}
            />
          </ColumnGroup>
        </Table>
      </div>
    </div>
    <div className={styles['checkout-section']}>
      <Table
      
        dataSource={data}
        pagination={false}
        showHeader={true}
        className={styles['course-price-detail']}
      >
        <Column
          title="Payment plan"
          className={styles['course-price-detail-figure']}
          dataIndex="price"
          key="price"
        ></Column>
      </Table>
      <CheckOutFront />
    </div>
  </div>
);
