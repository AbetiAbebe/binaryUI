import styles from './core-courses.module.scss';

/* eslint-disable-next-line */
export interface CoreCoursesProps {}

export function CoreCourses(props: CoreCoursesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CoreCourses!</h1>
    </div>
  );
}

export default CoreCourses;
