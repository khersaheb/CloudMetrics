// routes
import Widgets from 'Routes/widgets';
import Pages from 'Routes/pages';
import AdvanceUIComponents from 'Routes/advance-ui-components';
import CalendarComponents from 'Routes/calendar';
import ChartsComponents from 'Routes/charts';
import FormElements from 'Routes/forms';
import Users from 'Routes/users';
import Components from 'Routes/components';
import Tables from 'Routes/tables';
import Marketplace from 'Routes/marketplace';
import AsyncIntroductoryProgrammingComponent from 'Routes/introductoryprogramming';
import Icons from 'Routes/icons';
import Maps from 'Routes/maps';
import DragAndDrop from 'Routes/drag-drop';
import Editor from 'Routes/editor';
import Insight from 'Routes/insight';
import Dashboard from 'Routes/dashboard';
import Crm from 'Routes/crm';
import ImageCropper from 'Routes/image-cropper';
import VideoPlayer from 'Routes/video-player';
import Dropzone from 'Routes/dropzone';
import Myclasses from 'Routes/my-classes';
import Mystudents from 'Routes/my-students';
import Contact from 'Routes/contact';
import Myprofile from 'Routes/my-profile';
import Rizetrackdetail from 'Routes/techcomputerscienceasliberalart';
import Rizetracks from 'Routes/rize-tracks';
import Home from 'Routes/home';




// async component
import {
    AsyncAboutUsComponent,
    AsyncChatComponent,
    AsyncMailComponent,
    AsyncTodoComponent,
} from 'Components/AsyncComponent/AsyncComponent';

export default [{
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'crm',
        component: Crm
    },
    {
        path: 'widgets',
        component: Widgets
    },
    {
        path: 'insight',
        component: Insight
    },
    {
        path: 'icons',
        component: Icons
    },
    {
        path: 'about-us',
        component: AsyncAboutUsComponent
    },
    {
        path: 'pages',
        component: Pages
    },
    {
        path: 'my-classes/internal/introductoryprogramming',
        component: AsyncIntroductoryProgrammingComponent
    },
    {
        path: 'my-classes',
        component: Myclasses
    },
    {
        path: 'my-students',
        component: Mystudents
    },
    {
        path: 'chat',
        component: AsyncChatComponent
    },
    {
        path: 'mail',
        component: AsyncMailComponent
    },
    {
        path: 'todo',
        component: AsyncTodoComponent
    },
    {
        path: 'charts',
        component: ChartsComponents
    },
    {
        path: 'tables',
        component: Tables
    },
    {
        path: 'rize-tracks/techcomputerscienceasliberalart/introductoryprogramming',
        component: AsyncIntroductoryProgrammingComponent 
    },
    {
        path: 'marketplace/introductoryprogramming',
        component: AsyncIntroductoryProgrammingComponent 
    },
    {
        path: 'marketplace',
        component: Marketplace
    },
    {
        path: 'introductoryprogramming',
        component: AsyncIntroductoryProgrammingComponent 
    },
    {
        path: 'maps',
        component: Maps
    },
    {
        path: 'users',
        component: Users
    },
    {
        path: 'ui-components',
        component: Components
    },
    {
        path: 'advanced-component',
        component: AdvanceUIComponents
    },
    {
        path: 'drag-andDrop',
        component: DragAndDrop
    },
    {
        path: 'forms',
        component: FormElements
    },
    {
        path: 'editor',
        component: Editor
    },
    {
        path: 'calendar',
        component: CalendarComponents
    },
    {
        path: 'image-cropper',
        component: ImageCropper
    },
    {
        path: 'video-player',
        component: VideoPlayer
    },
    {
        path: 'dropzone',
        component: Dropzone
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'my-profile',
        component:Myprofile
    },
    {
        path: 'rize-tracks/techcomputerscienceasliberalart', 
        component:Rizetrackdetail
    },
    {
        path: 'rize-tracks',
        component:Rizetracks
    },
    {
        path: 'home',
        component:Home
    }
    

]