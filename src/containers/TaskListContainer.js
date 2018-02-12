import { connect } from 'react-redux';

import TaskList from '../components/tasks/TaskList';

const mapStateToProps = () => ({ patients: {} });

export default connect(mapStateToProps)(TaskList);
