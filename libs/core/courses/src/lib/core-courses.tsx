import styles from './core-courses.module.scss';
import { CourseDetail } from './components/courseDetail/courseDetail';

/* eslint-disable-next-line */
export interface CoreCoursesProps {}


export function CoreCourses(props: CoreCoursesProps) {
  return (
    <div className={styles['course-container']}>
      <CourseDetail />
    </div>
  );
}

export default CoreCourses;
