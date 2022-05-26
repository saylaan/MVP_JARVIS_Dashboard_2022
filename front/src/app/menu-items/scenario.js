// ==============================|| EXTERNAL COMPONENT IMPORT ||============================== //
import SmartIcon from '@mui/icons-material/SmartToyTwoTone';
import NoteAddIcon from '@mui/icons-material/NoteAddTwoTone';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearchTwoTone';
// ==============================|| DASHBOARD MENU ITEMS ||============================== //
const scenario = {
    id: 'scenario',
    type: 'group',
    children: [
        {
            id: 'scenarios',
            title: 'Scenarios',
            type: 'collapse',
            icon: SmartIcon,
            children: [
                {
                    id: 'show-scenario',
                    title: 'Show Scenario',
                    type: 'item',
                    url: 'scenario',
                    icon: ContentPasteSearchIcon,
                    breadcrumbs: false
                },
                {
                    id: 'create-scenario',
                    title: 'Create Scenario',
                    type: 'item',
                    url: 'scenario/create',
                    icon: NoteAddIcon,
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default scenario;
