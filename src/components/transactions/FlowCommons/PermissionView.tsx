import { Trans } from '@lingui/macro';
import { Box, Button, Link, Typography } from '@mui/material';
import { useModalContext } from 'src/hooks/useModal';

// TODO: need check texts
export const PermissionView = () => {
  const { close } = useModalContext();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mb: '92px',
        }}
      >
        <Typography sx={{ mt: 14 }} variant="h2">
          <Trans>Allowance required action</Trans>
        </Typography>
        <Typography sx={{ mt: '10px', textAlign: 'center' }}>
          <Trans>
            To get allowed to use this market please visit:{' '}
            <Link href="https://info.fireblocks.com/pd-beta">Fireblocks</Link>
          </Trans>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: 12 }}>
        <Button onClick={close} variant="contained" size="large" sx={{ minHeight: '44px' }}>
          <Trans>Close</Trans>
        </Button>
      </Box>
    </>
  );
};
