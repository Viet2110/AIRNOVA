import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { textFieldStyle } from '../../utils/StyleMui';

export default function AutocompleteCard({ values, data, title, handleClickInput, name, error }) {
    return (
        <Autocomplete
            disablePortal
            options={data}
            value={data.find(p => p.id == values) || null}
            onChange={(event, value) => handleClickInput({ target: { name: name, value: value?.id } })}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label={title}
                error={!!error[name]}
                helperText={error[name]}
            />}
            sx={textFieldStyle}
        />
    );
}
