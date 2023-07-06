import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout.jsx';
import { NothingSelectedView, NoteView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store/journal/thunks.js';
import { useDispatch, useSelector } from 'react-redux';

export const JournalPage = () => {
  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  const { isSaving, active } = useSelector((state) => state.journal);

  return (
    <>
      <JournalLayout className="animate__animated animate__fadeIn animate__faster">
        {/* <Typography>
          Nulla officia incididunt aute magna occaecat Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Dolores quibusdam soluta illo dicta
          quisquam enim accusantium tempore provident in sed nulla, perferendis,
          sequi ab earum ex exercitationem. Omnis, natus atque.
        </Typography> */}

        {!!active ? <NoteView /> : <NothingSelectedView />}

        <IconButton
          disabled={isSaving}
          onClick={onClickNewNote}
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50,
          }}>
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
    </>
  );
};
