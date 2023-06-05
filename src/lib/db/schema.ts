import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

// export const users = pgTable('users', {
//   id: serial('id').primaryKey(),
//   fullName: text('full_name'),
// });

export const firms = pgTable("firms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  website: text("website"),
});
