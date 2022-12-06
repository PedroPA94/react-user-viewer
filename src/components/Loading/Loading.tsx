import { ImSpinner2 } from "react-icons/im";
import styles from "./Loading.module.css";

interface LoadingProps {
  page?: boolean
}

export default function Loading({ page }: LoadingProps) {
	return (
		<div className={page ? styles.container_page : styles.container}>
			<ImSpinner2 className={styles.icon}/>
		</div>
	);
}