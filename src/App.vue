<template>
  <nav class="navbar">
    <Menubar :model="items" class="menu-bar">
      <template #start>
        <router-link to="/">
          <img alt="logo" src="@/assets/logo.svg" height="20" class="mr-2 logo" />
        </router-link>
      </template>
      <template #end>
        <Chip label="Alberto Laguna"
          image="https://media-exp1.licdn.com/dms/image/C4D03AQFWoV1_rbZt_w/profile-displayphoto-shrink_800_800/0/1629254720118?e=1665619200&v=beta&t=YjwZFtgkri7lg_oJ-J6HNXb3LHjoUuJK3f92JKtsLUc">
        </Chip>
      </template>
    </menubar>
  </nav>
  <div class="main">
    <router-view />
  </div>
</template>

<script>
import Menubar from 'primevue/menubar'
import Chip from 'primevue/chip'
// import Sidebar from 'primevue/sidebar'

export default {
  name: 'App',
  components: {
    Menubar,
    Chip,
    // Sidebar
  },
  data() {
    return {
      visibleLeft: true,
      profileItems: [
        {
          label: 'Main Calendar',
          icon: 'pi pi-fw pi-calendar',
          to: '/',
          image: 'https://media-exp1.licdn.com/dms/image/C4D03AQFWoV1_rbZt_w/profile-displayphoto-shrink_800_800/0/1629254720118?e=1665619200&v=beta&t=YjwZFtgkri7lg_oJ-J6HNXb3LHjoUuJK3f92JKtsLUc'
        },
      ],
      items: [
        {
          label: 'Main Calendar',
          icon: 'pi pi-fw pi-calendar',
          to: '/'
        },
        {
          label: 'PO Management',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Import New Items (Update Data)',
              icon: 'pi pi-fw pi-upload',
            }
          ]
        },
        {
          label: 'Users',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-user-plus',
              to: '/users/new'
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-user-minus',

            }
          ]
        },
        {
          label: 'Logout',
          icon: 'pi pi-fw pi-power-off'
        }
      ]
    }
  }
}
</script>

<style>
html {
    font-size: 12px;
}

#app {
  width: 100%;
}

.logo {
  margin-right: 1.5rem;
}

.top-bar {
  height: 3rem;
}

.p-sidebar-header {
  padding-top: 0 !important;
}

.menu-bar {
  border: 0px !important;
  width: 95%;
  height: 100% !important;
}

.p-menubar {
  background: #fff !important;
}

.navbar {
  margin: 0;
  background-color: #fff;
  position: fixed;
  justify-content: center;
  display: flex;
  top: 0;
  width: 100%;
  z-index: 1;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2);
}

.main {
  margin-left: 4em;
  margin-right: 4em;
  margin-top: 5em;
  z-index: 0;
}
</style>
