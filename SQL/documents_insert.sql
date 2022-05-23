delete from event_manager_db2.documents;
alter table event_manager_db2.documents auto_increment = 1;
insert into event_manager_db2.documents(name, dispname, createdAt, updatedAt) VALUES ('estimate', '見積書', now(), now());
insert into event_manager_db2.documents(name, dispname, createdAt, updatedAt) VALUES ('order', '注文書', now(), now());
insert into event_manager_db2.documents(name, dispname, createdAt, updatedAt) VALUES ('confirmationOrder', '注文請書', now(), now());
insert into event_manager_db2.documents(name, dispname, createdAt, updatedAt) VALUES ('delivery', '納品書', now(), now());
insert into event_manager_db2.documents(name, dispname, createdAt, updatedAt) VALUES ('acceptance', '検収書', now(), now());
insert into event_manager_db2.documents(name, dispname, createdAt, updatedAt) VALUES ('bill', '請求書', now(), now());
