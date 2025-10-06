import { useState } from 'react'
import './App.css'
import { Box, Button, CircularProgress, Container, FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", {
       emailContent,
       tone 
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate eamil reply. Please try again');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{py:4, backgroundColor: '#f5f7fa'}}>
      <Typography variant='h3' component="h1" gutterBottom sx={{ color: '#1a365d', fontWeight: 600 }}>
        Email Reply Generator
      </Typography>

      <Box sx={{ mx: 3, backgroundColor: '#ffffff', padding: 3, borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <TextField 
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          label="Original Email Content"
          value={emailContent || ''}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ 
            mb:2,
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#4299e1',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#3182ce',
              }
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#3182ce',
            }
          }}/>

          <FormControl fullWidth sx={{ 
            mb:2,
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#4299e1',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#3182ce',
              }
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#3182ce',
            }
          }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone || ''}
              label={"Tone (Optional)"}
              onChange={(e) => setTone(e.target.value)}>
                <MenuItem value="">None</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant='contained'
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth
            sx={{
              backgroundColor: '#3182ce',
              '&:hover': {
                backgroundColor: '#2c5282',
              },
              '&:disabled': {
                backgroundColor: '#cbd5e0',
              }
            }}>
            {loading ? <CircularProgress size={24} sx={{ color: '#ffffff' }}/> : "Generate Reply"}
          </Button>
      </Box>

      {error && (
        <Typography color='error' sx={{ mb:2, mt:2, backgroundColor: '#fff5f5', padding: 2, borderRadius: 1, border: '1px solid #fc8181' }}>
          {error}
        </Typography>
      )}

      {generatedReply && (
       <Box sx={{ mt: 3, backgroundColor: '#ffffff', padding: 3, borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <Typography variant='h6' gutterBottom sx={{ color: '#1a365d', fontWeight: 600 }}>
            Generated Reply:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant='outlined'
            value={generatedReply || ''}
            inputProps={{ readOnly: true }}/>
        
        <Button
          variant='outlined'
          sx={{ 
            mt: 2,
            borderColor: '#3182ce',
            color: '#3182ce',
            '&:hover': {
              borderColor: '#2c5282',
              backgroundColor: 'rgba(49, 130, 206, 0.04)',
            }
          }}
          onClick={() => navigator.clipboard.writeText(generatedReply)}>
            Copy to Clipboard
        </Button>
       </Box> 
      )}
    </Container>
  )
}

export default App