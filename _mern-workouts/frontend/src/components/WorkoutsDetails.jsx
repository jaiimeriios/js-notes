import { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutsDetails = ({ workout }) => {

    const { workouts, dispatch } = useWorkoutsContext();

    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');

    const [edit, setEdit] = useState(false);

    const toggleEditMode = () => {
        setEdit(true);
    };

    // PATCH
    const handlePatch = async (e) => {
        e.preventDefault();

        let _id = workout._id
        
        let patchWorkout = { title, reps, load, _id }

        // console.log(patchWorkout);
        // console.log(workout);
        // console.log(workouts);

        const response = await fetch(`workouts/${workout._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(patchWorkout),
        });

        // const json = await response.json();
   
        if (!response.ok) {
            console.log('error')
        }
        if (response.ok) {
            dispatch({ type: 'PATCH_WORKOUT', payload: patchWorkout })
        }
        setEdit(false);
    };
    
    // DELETE
    const handleDelete = async () => {
        const response = await fetch(`workouts/${workout._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json });
        }
    };

    return (
        <form className="workout-details" onSubmit={handlePatch}>
            {edit ? (
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    // value={workout.title}
                />
            ) : (
                <h4>{workout.title}</h4>
            )}
            {edit ? (
                <input
                    type="number"
                    onChange={(e) => setReps(e.target.value)}
                    // value={workout.reps}
                />
            ) : (
                <p>
                    <b>Reps</b> {workout.reps}
                </p>
            )}
            {edit ? (
                <input
                    type="number"
                    onChange={(e) => setLoad(e.target.value)}
                    // value={workout.load}
                />
            ) : (
                <p>
                    <b>Load (lb)</b> {workout.load}
                </p>
            )}
            <p>
                {formatDistanceToNow(new Date(workout.createdAt), {
                    addSuffix: true,
                })}
            </p>

            {edit ? (
                ''
            ) : (
                <span className="edit" onClick={toggleEditMode}>
                    Edit
                </span>
            )}
            <span className="delete" onClick={handleDelete}>
                Delete
            </span>
            {edit ? (
                <button className="update" onClick={handlePatch}>
                    Update
                </button>
            ) : (
                ''
            )}
        </form>
    );
};

export default WorkoutsDetails;
