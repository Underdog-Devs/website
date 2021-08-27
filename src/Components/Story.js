import styles from '../CSS/Story.module.css';

const Story = () => {
  return (
    <div className={styles.storyContainer}>
      <h1 className={styles.storyH1}>
        We are a group of software developers supporting the marginalized and
        formerly incarcerated in their transition into Tech.
      </h1>
    </div>
  );
};
export default Story;
