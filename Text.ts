🐾 FamiPet – Complete Full-Stack Integration & Bug-Fixing Task

I have an existing full-stack web application called FamiPet.

The project has an existing frontend and backend in separate folders:

FamiPet/
├── frontend/
└── backend/

The frontend and backend are currently not properly integrated.

Your job is to inspect the existing project, understand the current architecture, connect the frontend with the backend, fix all existing errors, make the application fully functional, and verify that all important data is properly saved in MongoDB.

---

🚨🚨 MOST IMPORTANT RULE — DO NOT TOUCH THE FRONTEND DESIGN 🚨🚨

The existing FamiPet frontend is already designed.

🔒 TREAT THE FRONTEND AS FROZEN.

❌ DO NOT redesign, replace, or unnecessarily modify:

- UI design
- Layout
- Colors
- Fonts
- Typography
- Animations
- Transitions
- Components
- Cards
- Buttons
- Icons
- Images
- Navbar
- Sidebar design
- Page designs
- Forms design
- Dashboard design
- User Panel design
- Admin Panel design
- Profile page design
- Adoption page design
- My Pets page design
- Community page design
- Lost & Found page design
- Breed page design
- Reminders page design
- Appointment page design
- Existing CSS
- Existing visual structure
- Existing UX

❌ DO NOT:

- Create a new frontend
- Replace existing pages
- Rebuild the UI
- Change the color scheme
- Change fonts
- Change spacing
- Change animations
- Replace existing components unnecessarily
- Replace User Panel
- Replace Admin Panel
- Redesign any page
- Rewrite the frontend unnecessarily

---

✅ FRONTEND CHANGES ALLOWED ONLY WHEN ABSOLUTELY NECESSARY

You may make minimum functional changes to the frontend only when required to connect it to the backend.

Examples:

- Fix incorrect API URL
- Fix API endpoint
- Fix HTTP method
- Fix request body
- Fix authentication token
- Fix API response handling
- Connect existing forms to backend
- Connect existing Profile upload
- Connect existing Appointment form
- Connect existing Adoption form
- Connect existing Community image upload
- Connect existing sidebar navigation
- Connect existing Breed card navigation
- Connect existing QR functionality
- Fix loading/error handling

These changes must not alter the existing appearance.

Before modifying frontend code, ask:

«Can this problem be fixed from the backend/API instead?»

If YES → fix it in the backend.

If a frontend change is absolutely required → make the smallest possible functional change and preserve the UI exactly.

---

🎯 MAIN OBJECTIVE

The goal is NOT to redesign FamiPet.

The goal is:

«Repair and integrate the existing FamiPet frontend with the existing backend and MongoDB while preserving the existing frontend design exactly.»

Architecture:

EXISTING FRONTEND
       ↓
     REST API
       ↓
EXISTING EXPRESS BACKEND
       ↓
   CONTROLLERS
       ↓
    MONGOOSE
       ↓
    MONGODB
       ↓
    RESPONSE
       ↓
EXISTING FRONTEND

---

1. COMPLETE PROJECT AUDIT

Before changing anything, inspect the complete project.

Frontend

Inspect:

- Framework
- Entry point
- Routing
- Pages
- Components
- User Panel
- Admin Panel
- Sidebar
- Navbar
- Forms
- API/service files
- Authentication
- State management
- Existing API calls
- Environment variables

Backend

Inspect:

- "server.js"
- Routes
- Controllers
- Models
- Middleware
- Authentication
- JWT
- CORS
- MongoDB
- Mongoose
- Email verification
- Password reset
- Upload functionality

Database

Inspect:

- MongoDB connection
- Database name
- Collections
- Schemas
- Relationships
- User references
- Pet references
- Existing stored data

Do not create duplicate implementations.

---

2. CREATE AN INTEGRATION MAP

For every feature, identify:

Frontend Page
     ↓
Frontend API
     ↓
HTTP Method
     ↓
Backend Route
     ↓
Controller
     ↓
Model
     ↓
MongoDB

Check which features are:

- Working
- Partially working
- Broken
- Missing
- Connected to fake/static data
- Not saving to MongoDB

---

3. BACKEND STABILITY

Make sure the backend starts correctly.

Check:

- Node.js
- Express.js
- Mongoose
- MongoDB
- CORS
- Helmet
- Compression
- Morgan
- Cookie-parser
- Environment variables
- Middleware
- Routes
- Controllers
- Models

Previously the backend has used approximately:

http://localhost:5000

Verify the actual configured port instead of blindly assuming it.

---

4. FIX IMPORT/EXPORT ERRORS

If errors such as:

Cannot find module '../controllers/authController'

appear:

Do NOT blindly create a new file.

Inspect:

- Actual controller filename
- Folder structure
- Import path
- Export syntax
- Relative path
- Case sensitivity

Then fix the existing implementation correctly.

---

5. MONGODB

Verify MongoDB is connected properly.

Check:

- Connection string
- Mongoose connection
- Database
- Collections
- Models
- Schemas
- References
- Validation
- Save operations
- Update operations

Existing development configuration may use:

mongodb://localhost:27017/petDB

Use the actual project configuration if different.

---

6. 🔐 AUTHENTICATION

Make the complete authentication system functional.

Registration

Register
 ↓
Validate
 ↓
Create User
 ↓
Hash Password
 ↓
Send Verification Email
 ↓
Verify Email

Login

Email + Password
 ↓
Validate
 ↓
Check User
 ↓
Check Verification
 ↓
Generate JWT/Auth Session
 ↓
Login

Logout

Ensure the existing logout mechanism works correctly.

---

7. 📧 EMAIL VERIFICATION BUG

Current problem:

Clicking Verify does not verify the email address.

Fix the complete flow:

Register
 ↓
Verification Token
 ↓
Email
 ↓
Click Verify
 ↓
Frontend Verification Page
 ↓
Backend Verification API
 ↓
Find User
 ↓
Validate Token
 ↓
Update isVerified
 ↓
MongoDB

Check:

- Token generation
- Token storage
- Token expiry
- Verification URL
- Verify button
- Frontend route
- API URL
- HTTP method
- Backend route
- Controller
- User lookup
- Token validation
- "isVerified"
- Database update
- Response handling

After successful verification:

isVerified = true

must be stored in MongoDB.

---

8. 📧 EMAIL DUPLICATION BUG

Prevent emails such as:

example@gmail.com@gmail.com

If the user enters:

example@gmail.com

store it correctly.

Do not append another email domain.

---

9. 👤 PROFILE

Connect the existing Profile page to the backend.

Do not redesign the Profile page.

It should support the existing functionality such as:

- View profile
- Name
- Email
- Phone
- Address
- City
- Avatar/profile picture
- Other existing fields
- Edit profile
- Update profile
- Change password if already supported

Profile data must actually be saved to MongoDB.

Users can only update their own profile.

Never return passwords in API responses.

---

10. 🖼️ PROFILE PICTURE BUG

Current problem:

Users can upload a profile picture, but it is not being saved.

Fix:

Select Image
 ↓
Upload
 ↓
Backend
 ↓
Image Storage
 ↓
Image URL
 ↓
User MongoDB Document
 ↓
Frontend

Check the existing implementation:

- File input
- FormData
- Upload endpoint
- Multer
- Cloudinary or existing storage
- User controller
- User model
- "avatar"/image field
- MongoDB update
- API response
- Frontend state

Test:

1. Upload image.
2. Refresh page.
3. Logout.
4. Login again.
5. Open Profile.

The image must still be displayed.

---

11. 👤 USER PANEL

Connect the existing User Panel to real backend data.

Verify existing features:

- Dashboard
- Profile
- My Pets
- Add Pet
- Edit Pet
- Delete Pet
- Pet Details
- Favorites
- Adoption Requests
- Health Records
- Vaccinations
- Reminders
- Notifications
- Digital Pet ID
- QR Code
- Breed
- Community
- PetGPT

Do not redesign any of these pages.

---

12. 👑 ADMIN PANEL

Connect the existing Admin Panel to real backend data.

Verify:

- Admin login
- Admin authorization
- Dashboard
- Statistics
- Users
- User management
- Block/unblock where supported
- Pets
- Pet management
- Adoption requests
- Approve/reject adoption requests
- Lost & Found reports
- Community management where supported

A normal user must not access admin APIs.

Backend authorization is mandatory.

---

13. 🐾 ADOPTION PAGE BUG

Current problem:

Unable to add a new pet for adoption.

Fix:

Existing Adoption Form
 ↓
API Request
 ↓
Backend Route
 ↓
Controller
 ↓
Pet Model
 ↓
MongoDB
 ↓
Adoption Page

Check:

- Form fields
- Validation
- API endpoint
- HTTP method
- Request body
- Authentication
- Authorization
- Pet model
- Adoption fields
- Image upload
- Controller
- MongoDB save
- Response

The newly added pet must actually be saved and appear in the Adoption page.

---

14. 🧭 SIDEBAR NAVIGATION BUG

Current problem:

Not all existing pages appear in the sidebar.

Inspect:

Existing Pages
       VS
Router Routes
       VS
Sidebar Links

Find missing pages.

Add only the missing navigation links.

Fix:

- Incorrect paths
- Missing routes
- Role-based navigation
- User navigation
- Admin navigation
- Mobile navigation if applicable

Do NOT redesign the sidebar.

---

15. 📅 APPOINTMENT DATABASE BUG

Current problem:

New appointments are not being saved to MongoDB.

Fix:

Appointment Form
 ↓
POST API
 ↓
Authentication
 ↓
Appointment Controller
 ↓
Appointment Model
 ↓
MongoDB
 ↓
Response
 ↓
Frontend

Check:

- Form state
- Fields
- Date
- Time
- User ID
- Pet ID
- Request body
- API endpoint
- HTTP method
- JWT
- Route
- Controller
- Model
- Validation
- MongoDB save
- Response
- Frontend refresh

Verify the appointment actually exists in MongoDB after creation.

---

16. 🔔 AUTOMATED REMINDERS BUG

Requirement:

When an appointment is scheduled, a reminder should automatically be created.

Expected:

Schedule Appointment
       ↓
Save Appointment
       ↓
Create Reminder Automatically
       ↓
Link Reminder to User + Pet
       ↓
Save Reminder
       ↓
Reminders Page

Check:

- Appointment controller
- Appointment model
- Reminder model
- Reminder controller
- Reminder API
- User relationship
- Pet relationship
- Appointment date/time
- Reminder date/time
- MongoDB save
- Frontend Reminders page

Avoid duplicate reminders when an appointment is accidentally submitted twice or updated.

---

17. 🐾 AUTOMATIC PET QR ID

Requirement:

When a new pet is added from My Pets, automatically generate a unique Pet QR ID.

Expected:

Add Pet
 ↓
Save Pet
 ↓
Generate Unique Pet ID
 ↓
Generate QR
 ↓
Store/link QR information
 ↓
Display in My Pets

Check the existing QR/Digital Pet ID implementation.

Each pet must have a unique identifier.

Example:

Pet 1 → Unique QR ID
Pet 2 → Different QR ID
Pet 3 → Different QR ID

Do not create duplicate QR IDs.

Use the existing QR library/system if available.

---

18. 🖼️ COMMUNITY IMAGE UPLOAD BUG

Current problem:

Users cannot attach images while creating Community posts.

Fix the existing upload flow:

Community Post
 ↓
Select Image
 ↓
FormData
 ↓
Backend Upload
 ↓
Image Storage
 ↓
Image URL
 ↓
Community Model
 ↓
MongoDB
 ↓
Community Page

Check:

- File input
- FormData
- "multipart/form-data"
- Upload middleware
- Multer
- Cloudinary if already used
- File field name
- Image URL
- Community model
- Controller
- MongoDB
- Frontend image rendering

Do not expose upload/API secrets in frontend.

Do not redesign Community.

---

19. 🔎 LOST & FOUND BUG

Current problem:

Lost & Found reports are not being stored/routed to Admin/published correctly.

Expected:

User
 ↓
Lost & Found Form
 ↓
Submit
 ↓
Backend API
 ↓
MongoDB
 ↓
Admin Panel
 ↓
Admin Reviews
 ↓
Publish/Status
 ↓
Users see published report

Check:

- Frontend form
- API
- Route
- Controller
- Model
- MongoDB
- User ID
- Report data
- Image upload
- Admin API
- Admin page
- Status
- Published state
- Authorization

If existing status fields are already present, use them.

Do not create unnecessary duplicate fields.

---

20. 🐕 BREED INFO CARD BUG

Current problem:

Clicking a Breed card does not display detailed information.

Expected:

Breed Page
 ↓
Click Breed Card
 ↓
Breed Details
 ↓
Detailed Information

Check:

- Card click handler
- Route
- Route parameter
- Breed ID/slug
- API endpoint
- Backend controller
- Breed data
- Detail page
- Navigation

Display existing supported information such as:

- Breed name
- Description
- Characteristics
- Size
- Temperament
- Lifespan
- Care
- Exercise
- Other existing fields

Do not redesign the Breed page.

---

21. 🗄️ CRITICAL DATABASE STORAGE DEFECT

Current problem:

The database currently stores information mainly from My Pets, while information from other pages is not being saved.

This must be investigated as a system-wide integration problem.

Create a feature mapping:

Feature
Frontend API
Backend Route
Controller
Model
MongoDB
Status

Check at minimum:

Users
Profile
Pets
Adoption
Appointments
Reminders
Community
Lost & Found
Health Records
Vaccinations
Favorites
Notifications

Find why data from these pages is not being persisted.

Investigate:

- Missing POST requests
- Incorrect API URLs
- Wrong HTTP methods
- Wrong request bodies
- Wrong field names
- Missing controllers
- Controllers not saving data
- Missing "await"
- Validation errors
- Authentication problems
- Wrong user IDs
- Wrong pet IDs
- Model/schema problems
- MongoDB problems
- Errors being silently ignored
- Frontend not processing responses
- CORS
- FormData problems

Do not assume MongoDB itself is broken.

Trace:

Frontend
 ↓
Request
 ↓
Backend
 ↓
Controller
 ↓
Model
 ↓
MongoDB

for every feature.

---

22. 🔴 "FAILED TO FETCH" MUST BE FIXED

If the application shows:

Failed to fetch

trace the entire request.

Check:

- Backend running
- Frontend running
- Correct port
- API base URL
- "/api" prefix
- Endpoint
- HTTP method
- Headers
- Request body
- JSON
- FormData
- JWT
- Authorization
- Cookies
- Credentials
- CORS
- Express middleware
- Route registration
- Controller
- MongoDB
- Environment variables

Do not hide the error.

Find and fix the root cause.

---

23. 🔐 DATA SECURITY

User A must not access User B's private information.

For example:

User A
 ❌ User B's pets
 ❌ User B's health records
 ❌ User B's appointments
 ❌ User B's reminders
 ❌ User B's favorites
 ❌ User B's private profile

Backend must enforce ownership.

Do not rely only on frontend restrictions.

---

24. 🔐 SECURITY AUDIT

Check:

- Password hashing
- JWT
- Token expiry
- Protected routes
- Role authorization
- User ownership
- Input validation
- CORS
- Environment variables
- File upload security
- Password reset
- Email verification

Never expose:

JWT_SECRET
Database credentials
Cloudinary secrets
API keys
Passwords
Private tokens

in frontend code.

---

25. 📱 RESPONSIVENESS

After functionality is fixed, test:

- Desktop
- Laptop
- Tablet
- Mobile

Fix only actual responsive problems.

DO NOT redesign the frontend.

---

26. 🐾 ANIMAL PLANET → FAMIPET

The final project name is:

FamiPet

If visible branding still says:

Animal Planet

change the visible branding to:

FamiPet

Do not unnecessarily rename:

- Backend routes
- Database collections
- Variables
- Files
- API contracts

if doing so can break the application.

---

27. 🚫 DO NOT DELETE WORKING CODE

Do not delete:

- Working routes
- Controllers
- Models
- Components
- Pages
- Existing functionality

Do not rewrite the entire project.

Do not create duplicate implementations.

Use and repair existing code wherever possible.

---

28. 🔴 GLOBAL ERROR-FIXING RULE

You must not stop after fixing the listed issues.

During the entire process, if ANY error appears:

Error
 ↓
Read complete error
 ↓
Find source
 ↓
Trace data/request flow
 ↓
Find root cause
 ↓
Fix root cause
 ↓
Restart if necessary
 ↓
Test again

Check:

- Browser console
- Backend terminal
- Network requests
- HTTP status
- Request payload
- Response
- MongoDB
- Authentication
- CORS
- Routes
- Controllers
- Models
- Frontend state

Do not:

- Ignore errors
- Hide errors
- Use fake data
- Use mock APIs
- Add random workarounds
- Create duplicate files
- Rewrite the frontend
- Rewrite the backend unnecessarily

If you discover another error that is not listed here, fix it too if it is related to making FamiPet functional.

---

29. 🧪 COMPLETE END-TO-END TESTING

Test the actual application after fixing it.

Authentication

[ ] Register
[ ] Email verification
[ ] Verify button
[ ] isVerified updated
[ ] Login
[ ] Logout
[ ] Forgot password
[ ] Reset password

Profile

[ ] View profile
[ ] Edit profile
[ ] Update profile
[ ] Upload profile picture
[ ] Image saved to database
[ ] Refresh page
[ ] Logout/login
[ ] Picture remains

My Pets

[ ] Add pet
[ ] Edit pet
[ ] Delete pet
[ ] Pet saved
[ ] Unique Pet QR ID generated
[ ] QR displayed

Adoption

[ ] Add pet for adoption
[ ] Pet saved
[ ] Pet appears in Adoption page
[ ] Submit adoption request
[ ] Admin sees request
[ ] Admin approves/rejects
[ ] User sees status

Appointments

[ ] Create appointment
[ ] Appointment saved to MongoDB
[ ] Appointment displayed
[ ] Reminder automatically created
[ ] Reminder displayed

Community

[ ] Create post
[ ] Attach image
[ ] Upload image
[ ] Save image URL
[ ] Save post
[ ] Display image

Lost & Found

[ ] Submit report
[ ] Save report
[ ] Admin receives report
[ ] Admin manages report
[ ] Publish report
[ ] Published report visible

Breed

[ ] Breed cards
[ ] Click card
[ ] Breed details open
[ ] Correct details displayed

Sidebar

[ ] All existing pages identified
[ ] All intended pages available in sidebar
[ ] User navigation works
[ ] Admin navigation works
[ ] No broken links

Database

Verify actual MongoDB records for:

[ ] Users
[ ] Profile updates
[ ] Pets
[ ] Adoption
[ ] Appointments
[ ] Reminders
[ ] Community posts
[ ] Community images
[ ] Lost & Found
[ ] Health Records
[ ] Vaccinations
[ ] Favorites
[ ] Notifications

---

30. 🚨 FINAL FRONTEND PROTECTION CHECK

Before finishing, compare the frontend before and after your changes.

Make sure you did NOT unnecessarily change:

❌ Design
❌ Layout
❌ Colors
❌ Fonts
❌ Animations
❌ Components
❌ Pages
❌ Navbar
❌ Sidebar appearance
❌ Cards
❌ Buttons
❌ User Panel UI
❌ Admin Panel UI

If any unnecessary frontend design change was made during development, revert it.

---

31. FINAL REPORT

At the end, provide a detailed report:

========================================
       FamiPet FINAL STATUS
========================================

Frontend Design:          PRESERVED ✅
Frontend ↔ Backend:       ✅
MongoDB:                  ✅
API Integration:          ✅

Registration:             ✅
Email Verification:       ✅
Login:                    ✅
Logout:                   ✅
Forgot Password:          ✅
Reset Password:           ✅

Profile:                  ✅
Profile Picture:          ✅

My Pets:                  ✅
Pet QR ID:                ✅

Adoption:                 ✅
Adoption Requests:        ✅

Appointments:             ✅
Automatic Reminders:      ✅

Community:                ✅
Community Images:         ✅

Lost & Found:             ✅
Admin Reports:            ✅

Breed Details:            ✅

Health Records:           ✅
Vaccinations:             ✅
Favorites:                ✅
Notifications:            ✅

Sidebar Navigation:       ✅
User Panel:               ✅
Admin Panel:              ✅

Role Authorization:       ✅
Data Ownership:           ✅
Security:                 ✅
Responsive Design:        ✅

Failed to Fetch:          FIXED
Database Persistence:     VERIFIED

Frontend Errors:          0 / list remaining
Backend Errors:           0 / list remaining
========================================

If something genuinely cannot be completed, do NOT mark it as complete.

Instead report:

Feature:
Status:
Root Cause:
Files Changed:
What Was Fixed:
Testing Result:
Remaining Issue:

---

🎯 FINAL GOAL

Make the existing FamiPet application fully functional.

The most important rules are:

🔴 DO NOT REDESIGN THE FRONTEND.

🔴 DO NOT REPLACE THE FRONTEND.

🔴 DO NOT MODIFY THE FRONTEND UNNECESSARILY.

🔴 PRESERVE THE EXISTING UI EXACTLY.

🔴 FIX THE BACKEND AND INTEGRATION PROPERLY.

🔴 CONNECT ALL EXISTING FEATURES TO REAL APIs.

🔴 SAVE ALL REQUIRED DATA TO MONGODB.

🔴 FIX EVERY ERROR YOU FIND.

🔴 TEST EVERY FEATURE BEFORE DECLARING SUCCESS.

Final architecture:

                    FamiPet
                       │
          ┌────────────┴────────────┐
          │                         │
      USER PANEL               ADMIN PANEL
          │                         │
          └──────────┬──────────────┘
                     ↓
                 REST API
                     ↓
             Express Backend
                     ↓
                Controllers
                     ↓
                  Mongoose
                     ↓
                  MongoDB

The final result must be the same existing FamiPet frontend, but fully connected to the backend and database, with all features working correctly.

FINAL INSTRUCTION:

Do not touch the frontend design. Fix the functionality, backend, APIs, database integration, authentication, authorization, persistence, and errors while preserving the existing FamiPet frontend exactly as it is.
