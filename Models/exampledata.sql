TRUNCATE TABLE "Projects" RESTART IDENTITY;

INSERT INTO "Projects" ("Name", "Description", "DueDate", "Completed") VALUES ('Build an app', 'Build your Task Tracker app', '2021, 9, 1', 'false');
INSERT INTO "Projects" ("Name", "Description", "DueDate", "Completed") VALUES ('Build another app', 'Figure out another app to build', '2021, 10, 1', 'false');
INSERT INTO "Projects" ("Name", "Description", "DueDate", "Completed") VALUES ('Finish front-end course', 'On Front-End Masters', '2021, 10, 20', 'false');

INSERT INTO "Tasks" ("Name", "Description", "EstimatedTime", "StartDate", "DueDate", "Completed") VALUES ('Wireframe', 'A quick UI/UX Sketch', '2021, 7, 20', '2021, 7, 27', 'false');
INSERT INTO "Tasks" ("Name", "Description", "EstimatedTime", "StartDate", "DueDate", "Completed") VALUES ('ERD', 'A relationship diagram', '2021, 7, 21', '2021, 7, 28', 'false');
INSERT INTO "Tasks" ("Name", "Description", "EstimatedTime", "StartDate", "DueDate", "Completed") VALUES ('Front-End', 'Hardcoded HTML and CSS ', '2021, 8, 5', '2021, 8, 15', 'false');




