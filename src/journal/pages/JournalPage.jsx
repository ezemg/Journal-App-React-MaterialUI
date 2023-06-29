import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout.jsx';
import { NothingSelectedView, NoteView } from '../views';
import { AddOutlined } from '@mui/icons-material';

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/* <Typography>
          Nulla officia incididunt aute magna occaecat Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Dolores quibusdam soluta illo dicta
          quisquam enim accusantium tempore provident in sed nulla, perferendis,
          sequi ab earum ex exercitationem. Omnis, natus atque.
        </Typography> */}

        {/* <NothingSelectedView /> */}
        <NoteView />

        <IconButton
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
