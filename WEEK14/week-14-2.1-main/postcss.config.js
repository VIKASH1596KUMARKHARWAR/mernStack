Global Styles
html, body {
  height: 100%;
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f8f9fa; /* Light background color for a clean look */
  scroll-behavior: smooth; /* Smooth scrolling */
  font-size: 1rem; /* Base font size */
}

/* Trigger Button Styles */
.trigger {
  padding: 0 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
  z-index: 1000;
}

.trigger:hover {
  color: #007bff; /* Bootstrap primary color */
}

/* Layout Styles */
.ant-layout {
  height: 100vh; /* Use full height */
  display: flex; /* Flexbox layout for proper positioning */
  margin: 0; /* Remove margin */
  flex-direction: row-reverse; /* This moves the layout to the right */
}

.ant-layout-sider {
  flex: 0 0 250px !important; /* Set sidebar width */
  max-width: 250px !important; /* Ensure max width */
  min-width: 250px !important; /* Ensure min width */
  width: 250px !important; /* Ensure width */
  background-color: #343a40; /* Dark sidebar for contrast */
  position: fixed; /* Fix the sidebar in place */
  height: 100vh; /* Full height */
  overflow-y: auto; /* Enable vertical scrolling if content exceeds height */
  z-index: 1000; /* Ensure it stays above other content */
  right: 0; /* Align the sidebar to the right */
}

.ant-layout-sider-collapsed {
  flex: 0 0 80px !important; /* Collapsed width */
  max-width: 80px !important;
  min-width: 80px !important;
  width: 80px !important;
}

/* Ensure content doesn't overlap with the sidebar */
.site-layout {
  margin-right: 250px; /* Adjust based on sidebar width */
  transition: margin-right 0.3s; /* Smooth transition */
}

.site-layout.collapsed {
  margin-right: 80px; /* Adjust for collapsed state */
}

/* Menu Item Styles */
.ant-menu-item {
  background-color: rgba(80, 85, 88, 0.8); /* Semi-transparent background */
  border-radius: 5px; /* Rounded corners for a softer look */
  transition: background-color 0.3s ease; /* Smooth transition */
  display: flex; /* Use flexbox for alignment */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  height: 48px;
}

.ant-menu-item:hover {
  background-color: rgb(59, 57, 57); /* Full opacity on hover */
}

.ant-menu-item .anticon {
  margin-left: 20px; /* Space between icon and text (reversed for right sidebar) */
}

.ant-menu-item.active {
  background-color: rgba(0, 128, 255, 0.8); /* Different color for active item */
  color: white; /* Change text color for active item */
}

/* Responsive Logo Display */
.logo {
  background-color: rgba(0, 128, 255, 0.8); /* Light blue background */
  padding: 10px; /* Padding around the text */
  max-width: 280px; /* Set a maximum width */
  margin: 0 auto; /* Center the logo */
  height:100px;
}

.sm-logo {
  display: none;
}

.ant-layout-sider-collapsed .sm-logo {
  display: block;
}

.ant-layout-sider-collapsed .lg-logo {
  display: none;
}

/* Header Styles */
.ant-layout-header {
  background: #f0f8ff;
}

.ant-layout-header h5 {
  line-height: 20px;
  font-size: 14px;
  color: #495057; /* Darker text for better readability */
}

.ant-layout-header p {
  line-height: 20px;
  font-size: 13px;
  color: #6c757d; /* Gray text for secondary information */
}

.ant-layout-header div .badge {
  top: 16px;
  right: -6px;
}

/* Error Message Styles */
.error {
  color: red;
  font-size: 12px;
}

/* Dashboard Styles */
.dashboard-container {
  background-color: #f8f9fa; /* Light background for the dashboard */
  padding: 20px; /* Padding for spacing */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.dashboard-header {
  font-size: 24px; /* Larger font size for the header */
  color: #343a40; /* Darker text for better readability */
  margin-bottom: 20px; /* Space below the header */
}

