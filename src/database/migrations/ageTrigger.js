const db = require('../client');

async function ageTrigger() {
  await db.connect();

  await db.query(`create function age_dog() returns trigger as $$
  begin
  update dog set age = age(current_date, birth) where id=new.id;
  return new;
  end; $$
  language plpgsql;`);

  await db.query(`create trigger age_dog_insert
  after insert on dog
  for each row
  execute procedure age_dog();`);

  await db.query(`create trigger age_dog_update
  after update of birth on dog
  for each row
  execute procedure age_dog();`);

  await db.query(`create function age_cat() returns trigger as $$
  begin
  update cat set age = age(current_date, birth) where id=new.id;
  return new;
  end; $$
  language plpgsql;`);

  await db.query(`create trigger age_cat_insert
  after insert on cat
  for each row
  execute procedure age_cat();`);

  await db.query(`create trigger age_dog_update
  after update of birth on cat
  for each row
  execute procedure age_cat();`);

  await db.end();
}

ageTrigger();
