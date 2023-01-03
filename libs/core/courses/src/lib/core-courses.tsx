import styles from './core-courses.module.scss';
import CoursesList from './components/coursesList/coursesList';
/* eslint-disable-next-line */
export interface CoreCoursesProps {}


export function CoreCourses(props: CoreCoursesProps) {
  return (
    <div className={styles['']}>
      <CoursesList />
    </div>
  );
}

export default CoreCourses;
