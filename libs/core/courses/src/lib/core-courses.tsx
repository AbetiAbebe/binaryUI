import styles from './core-courses.module.scss';
import { CourseList } from './components/coursesList/coursesList';


/* eslint-disable-next-line */
export interface CoreCoursesProps {}

export function CoreCourses(props: CoreCoursesProps) {
  return (
    <div className={styles['course-container']}>
      <CourseList />
    </div>
  );
}

export default CoreCourses;
