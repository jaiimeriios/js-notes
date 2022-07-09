import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutsDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();

    const handleClick = async () => {
        const response = await fetch(`workouts/${workout._id}`, {
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            // body: JSON.stringify(workout),
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json });
        }
    };

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p>
                <b>Load (lb)</b>: {workout.load}
            </p>
            <p>
                <b>Reps</b>: {workout.reps}
            </p>
            <p>
                {formatDistanceToNow(new Date(workout.createdAt), {
                    addSuffix: true,
                })}
            </p>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
};

export default WorkoutsDetails;
