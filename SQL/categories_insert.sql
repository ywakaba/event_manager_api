delete from event_manager_db.categories;
alter table event_manager_db.categories auto_increment = 1;
insert into event_manager_db.categories(eventGroupId, name, createdAt, updatedAt) VALUES (1, '新規', now(), now());
insert into event_manager_db.categories(eventGroupId, name, createdAt, updatedAt) VALUES (1, '継続(追加)', now(), now());
