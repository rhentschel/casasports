-- ============================================================================
-- Casa Sports - Payload CMS 3.x PostgreSQL Schema
-- Generated from collection/global definitions
-- Conventions verified against @payloadcms/drizzle source code
-- ============================================================================

-- ============================================================================
-- ENUM TYPES
-- ============================================================================

CREATE TYPE "enum_users_role" AS ENUM ('admin', 'editor');

CREATE TYPE "enum_courses_name" AS ENUM (
  'Power Training',
  'Cycling',
  'Functional',
  'Cardio',
  'Zirkeltraining',
  'Gruppentraining'
);

CREATE TYPE "enum_courses_day" AS ENUM ('0', '1', '2', '3', '4', '5');

CREATE TYPE "enum_courses_intensity" AS ENUM ('1', '2', '3');

CREATE TYPE "enum_job_positions_icon" AS ENUM (
  'Dumbbell',
  'Users',
  'GraduationCap',
  'Headphones'
);

CREATE TYPE "enum_job_applications_status" AS ENUM (
  'neu',
  'in_bearbeitung',
  'eingeladen',
  'abgelehnt',
  'eingestellt'
);

CREATE TYPE "enum_membership_signups_status" AS ENUM (
  'aktiv',
  'gekuendigt',
  'pausiert'
);


-- ============================================================================
-- COLLECTION: users (auth collection)
-- ============================================================================

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "role" "enum_users_role" DEFAULT 'editor',
  -- Auth fields (email)
  "email" varchar NOT NULL,
  -- Auth fields (base: salt, hash, resetPassword)
  "reset_password_token" varchar,
  "reset_password_expiration" timestamp(3) with time zone,
  "salt" varchar,
  "hash" varchar,
  -- Auth fields (account lock, default maxLoginAttempts=5)
  "login_attempts" numeric DEFAULT 0,
  "lock_until" timestamp(3) with time zone,
  -- Payload timestamps
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");

-- Auth sessions sub-table (useSessions=true by default in Payload 3.x)
-- sessions array has fields: id (text), createdAt (date), expiresAt (date)
-- The 'id' field (type text) becomes the PK via setColumnID
CREATE TABLE "users_sessions" (
  "id" varchar PRIMARY KEY,
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now(),
  "expires_at" timestamp(3) with time zone NOT NULL
);

ALTER TABLE "users_sessions"
  ADD CONSTRAINT "users_sessions_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "users"("id") ON DELETE CASCADE;

CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");


-- ============================================================================
-- COLLECTION: media (upload collection)
-- ============================================================================

CREATE TABLE "media" (
  "id" serial PRIMARY KEY,
  "alt" varchar NOT NULL,
  -- Upload base fields
  "url" varchar,
  "thumbnail_u_r_l" varchar,
  "filename" varchar,
  "mime_type" varchar,
  "filesize" numeric,
  "width" numeric,
  "height" numeric,
  "focal_x" numeric,
  "focal_y" numeric,
  -- Upload image sizes (group: sizes, flattened with prefix)
  -- sizes.thumbnail
  "sizes_thumbnail_url" varchar,
  "sizes_thumbnail_width" numeric,
  "sizes_thumbnail_height" numeric,
  "sizes_thumbnail_mime_type" varchar,
  "sizes_thumbnail_filesize" numeric,
  "sizes_thumbnail_filename" varchar,
  -- sizes.card
  "sizes_card_url" varchar,
  "sizes_card_width" numeric,
  "sizes_card_height" numeric,
  "sizes_card_mime_type" varchar,
  "sizes_card_filesize" numeric,
  "sizes_card_filename" varchar,
  -- sizes.hero
  "sizes_hero_url" varchar,
  "sizes_hero_width" numeric,
  "sizes_hero_height" numeric,
  "sizes_hero_mime_type" varchar,
  "sizes_hero_filesize" numeric,
  "sizes_hero_filename" varchar,
  -- Payload timestamps
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");


-- ============================================================================
-- COLLECTION: categories
-- ============================================================================

CREATE TABLE "categories" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "slug" varchar NOT NULL,
  "description" varchar,
  "color" varchar DEFAULT 'cs-accent',
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");


-- ============================================================================
-- COLLECTION: authors
-- ============================================================================

CREATE TABLE "authors" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "slug" varchar NOT NULL,
  "role" varchar NOT NULL,
  "bio" varchar,
  -- Upload relation (single, not hasMany) -> column on parent
  "image_id" integer,
  -- Group: social (flattened with prefix)
  "social_instagram" varchar,
  "social_linkedin" varchar,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

ALTER TABLE "authors"
  ADD CONSTRAINT "authors_image_id_fk"
  FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE SET NULL;

CREATE UNIQUE INDEX "authors_slug_idx" ON "authors" USING btree ("slug");
CREATE INDEX "authors_image_idx" ON "authors" USING btree ("image_id");
CREATE INDEX "authors_updated_at_idx" ON "authors" USING btree ("updated_at");
CREATE INDEX "authors_created_at_idx" ON "authors" USING btree ("created_at");

-- Array sub-table: authors_expertise
CREATE TABLE "authors_expertise" (
  "id" serial PRIMARY KEY,
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "skill" varchar NOT NULL
);

ALTER TABLE "authors_expertise"
  ADD CONSTRAINT "authors_expertise_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "authors"("id") ON DELETE CASCADE;

CREATE INDEX "authors_expertise_order_idx" ON "authors_expertise" USING btree ("_order");
CREATE INDEX "authors_expertise_parent_id_idx" ON "authors_expertise" USING btree ("_parent_id");


-- ============================================================================
-- COLLECTION: posts
-- ============================================================================

CREATE TABLE "posts" (
  "id" serial PRIMARY KEY,
  "title" varchar NOT NULL,
  "slug" varchar NOT NULL,
  "excerpt" varchar NOT NULL,
  "content" jsonb NOT NULL,
  -- Upload relation (single) to media
  "cover_image_id" integer NOT NULL,
  -- Relationship (single) to categories
  "category_id" integer NOT NULL,
  -- Relationship (single) to authors
  "author_id" integer NOT NULL,
  "published_at" timestamp(3) with time zone NOT NULL,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "featured" boolean DEFAULT false,
  "is_pillar" boolean DEFAULT false,
  -- Relationship (single) to topic_clusters
  "topic_cluster_id" integer,
  -- Group: seo (flattened with prefix)
  "seo_title" varchar,
  "seo_description" varchar,
  -- Payload timestamps
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

ALTER TABLE "posts"
  ADD CONSTRAINT "posts_cover_image_id_fk"
  FOREIGN KEY ("cover_image_id") REFERENCES "media"("id") ON DELETE SET NULL;

ALTER TABLE "posts"
  ADD CONSTRAINT "posts_category_id_fk"
  FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL;

ALTER TABLE "posts"
  ADD CONSTRAINT "posts_author_id_fk"
  FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE SET NULL;

-- NOTE: posts.topic_cluster_id FK is deferred to end of file (circular dependency)

CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
CREATE INDEX "posts_cover_image_idx" ON "posts" USING btree ("cover_image_id");
CREATE INDEX "posts_category_idx" ON "posts" USING btree ("category_id");
CREATE INDEX "posts_author_idx" ON "posts" USING btree ("author_id");
CREATE INDEX "posts_topic_cluster_idx" ON "posts" USING btree ("topic_cluster_id");
CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");

-- Array sub-table: posts_tags
CREATE TABLE "posts_tags" (
  "id" serial PRIMARY KEY,
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "tag" varchar NOT NULL
);

ALTER TABLE "posts_tags"
  ADD CONSTRAINT "posts_tags_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE CASCADE;

CREATE INDEX "posts_tags_order_idx" ON "posts_tags" USING btree ("_order");
CREATE INDEX "posts_tags_parent_id_idx" ON "posts_tags" USING btree ("_parent_id");

-- Relationships join table: posts_rels
-- For hasMany relationships: relatedPosts -> posts
CREATE TABLE "posts_rels" (
  "id" serial PRIMARY KEY,
  "order" integer,
  "parent_id" integer NOT NULL,
  "path" varchar NOT NULL,
  -- hasMany relation column for posts (relatedPosts -> posts)
  "posts_id" integer
);

ALTER TABLE "posts_rels"
  ADD CONSTRAINT "posts_rels_parent_fk"
  FOREIGN KEY ("parent_id") REFERENCES "posts"("id") ON DELETE CASCADE;

ALTER TABLE "posts_rels"
  ADD CONSTRAINT "posts_rels_posts_id_fk"
  FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE CASCADE;

CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
CREATE INDEX "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");


-- ============================================================================
-- COLLECTION: topic_clusters
-- ============================================================================

CREATE TABLE "topic_clusters" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "slug" varchar NOT NULL,
  "description" varchar,
  -- Relationship (single) to posts
  "pillar_post_id" integer,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

ALTER TABLE "topic_clusters"
  ADD CONSTRAINT "topic_clusters_pillar_post_id_fk"
  FOREIGN KEY ("pillar_post_id") REFERENCES "posts"("id") ON DELETE SET NULL;

CREATE UNIQUE INDEX "topic_clusters_slug_idx" ON "topic_clusters" USING btree ("slug");
CREATE INDEX "topic_clusters_pillar_post_idx" ON "topic_clusters" USING btree ("pillar_post_id");
CREATE INDEX "topic_clusters_updated_at_idx" ON "topic_clusters" USING btree ("updated_at");
CREATE INDEX "topic_clusters_created_at_idx" ON "topic_clusters" USING btree ("created_at");

-- Relationships join table: topic_clusters_rels
-- For hasMany relationship: articles -> posts
CREATE TABLE "topic_clusters_rels" (
  "id" serial PRIMARY KEY,
  "order" integer,
  "parent_id" integer NOT NULL,
  "path" varchar NOT NULL,
  "posts_id" integer
);

ALTER TABLE "topic_clusters_rels"
  ADD CONSTRAINT "topic_clusters_rels_parent_fk"
  FOREIGN KEY ("parent_id") REFERENCES "topic_clusters"("id") ON DELETE CASCADE;

ALTER TABLE "topic_clusters_rels"
  ADD CONSTRAINT "topic_clusters_rels_posts_id_fk"
  FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE CASCADE;

CREATE INDEX "topic_clusters_rels_order_idx" ON "topic_clusters_rels" USING btree ("order");
CREATE INDEX "topic_clusters_rels_parent_idx" ON "topic_clusters_rels" USING btree ("parent_id");
CREATE INDEX "topic_clusters_rels_path_idx" ON "topic_clusters_rels" USING btree ("path");
CREATE INDEX "topic_clusters_rels_posts_id_idx" ON "topic_clusters_rels" USING btree ("posts_id");


-- ============================================================================
-- COLLECTION: team_members
-- ============================================================================

CREATE TABLE "team_members" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "role" varchar NOT NULL,
  "image_id" integer NOT NULL,
  "video" varchar,
  "quote" varchar,
  "sort_order" numeric DEFAULT 0,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

ALTER TABLE "team_members"
  ADD CONSTRAINT "team_members_image_id_fk"
  FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE SET NULL;

CREATE INDEX "team_members_image_idx" ON "team_members" USING btree ("image_id");
CREATE INDEX "team_members_updated_at_idx" ON "team_members" USING btree ("updated_at");
CREATE INDEX "team_members_created_at_idx" ON "team_members" USING btree ("created_at");


-- ============================================================================
-- COLLECTION: courses
-- ============================================================================

CREATE TABLE "courses" (
  "id" serial PRIMARY KEY,
  "name" "enum_courses_name" NOT NULL,
  "day" "enum_courses_day" NOT NULL,
  "time" varchar NOT NULL,
  "duration" numeric NOT NULL DEFAULT 45,
  "trainer" varchar NOT NULL,
  "room" varchar NOT NULL,
  "intensity" "enum_courses_intensity" NOT NULL DEFAULT '2',
  "active" boolean DEFAULT true,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX "courses_updated_at_idx" ON "courses" USING btree ("updated_at");
CREATE INDEX "courses_created_at_idx" ON "courses" USING btree ("created_at");


-- ============================================================================
-- COLLECTION: job_positions
-- ============================================================================

CREATE TABLE "job_positions" (
  "id" serial PRIMARY KEY,
  "title" varchar NOT NULL,
  "type" varchar NOT NULL,
  "hours" varchar NOT NULL,
  "icon" "enum_job_positions_icon" DEFAULT 'Dumbbell',
  "description" varchar NOT NULL,
  "active" boolean DEFAULT true,
  "sort_order" numeric DEFAULT 0,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX "job_positions_updated_at_idx" ON "job_positions" USING btree ("updated_at");
CREATE INDEX "job_positions_created_at_idx" ON "job_positions" USING btree ("created_at");

-- Array sub-table: job_positions_tasks
CREATE TABLE "job_positions_tasks" (
  "id" serial PRIMARY KEY,
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "task" varchar NOT NULL
);

ALTER TABLE "job_positions_tasks"
  ADD CONSTRAINT "job_positions_tasks_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "job_positions"("id") ON DELETE CASCADE;

CREATE INDEX "job_positions_tasks_order_idx" ON "job_positions_tasks" USING btree ("_order");
CREATE INDEX "job_positions_tasks_parent_id_idx" ON "job_positions_tasks" USING btree ("_parent_id");

-- Array sub-table: job_positions_requirements
CREATE TABLE "job_positions_requirements" (
  "id" serial PRIMARY KEY,
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "requirement" varchar NOT NULL
);

ALTER TABLE "job_positions_requirements"
  ADD CONSTRAINT "job_positions_requirements_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "job_positions"("id") ON DELETE CASCADE;

CREATE INDEX "job_positions_requirements_order_idx" ON "job_positions_requirements" USING btree ("_order");
CREATE INDEX "job_positions_requirements_parent_id_idx" ON "job_positions_requirements" USING btree ("_parent_id");


-- ============================================================================
-- COLLECTION: job_applications
-- ============================================================================

CREATE TABLE "job_applications" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "email" varchar NOT NULL,
  "phone" varchar NOT NULL,
  "position" varchar NOT NULL,
  "experience" varchar,
  "availability" varchar,
  "start_date" timestamp(3) with time zone,
  "message" varchar NOT NULL,
  "status" "enum_job_applications_status" DEFAULT 'neu',
  "notes" jsonb,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX "job_applications_updated_at_idx" ON "job_applications" USING btree ("updated_at");
CREATE INDEX "job_applications_created_at_idx" ON "job_applications" USING btree ("created_at");


-- ============================================================================
-- COLLECTION: membership_signups
-- ============================================================================

CREATE TABLE "membership_signups" (
  "id" serial PRIMARY KEY,
  "contract_id" varchar,
  "customer_id" varchar,
  "customer_name" varchar NOT NULL,
  "email" varchar,
  "phone" varchar,
  "plan" varchar NOT NULL,
  "term_months" numeric,
  "monthly_price" numeric,
  "status" "enum_membership_signups_status" DEFAULT 'aktiv',
  "magicline_response" jsonb,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX "membership_signups_updated_at_idx" ON "membership_signups" USING btree ("updated_at");
CREATE INDEX "membership_signups_created_at_idx" ON "membership_signups" USING btree ("created_at");


-- ============================================================================
-- GLOBAL: site_settings
-- ============================================================================

CREATE TABLE "site_settings" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL DEFAULT 'Casa Sports',
  "tagline" varchar DEFAULT 'MEIN NEUES ICH',
  "description" varchar,
  "owner" varchar,
  "phone" varchar NOT NULL,
  "email" varchar NOT NULL,
  "tax_id" varchar,
  -- Group: address (flattened)
  "address_street" varchar NOT NULL,
  "address_zip" varchar NOT NULL,
  "address_city" varchar NOT NULL,
  "address_country" varchar DEFAULT 'Deutschland',
  -- Group: social (flattened)
  "social_instagram" varchar,
  "social_facebook" varchar,
  -- Group: rating (flattened)
  "rating_score" numeric,
  "rating_max" numeric DEFAULT 5,
  "rating_label" varchar,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);


-- ============================================================================
-- GLOBAL: navigation
-- ============================================================================

CREATE TABLE "navigation" (
  "id" serial PRIMARY KEY,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

-- Array sub-table: navigation_main_nav
CREATE TABLE "navigation_main_nav" (
  "id" serial PRIMARY KEY,
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "label" varchar NOT NULL,
  "href" varchar NOT NULL
);

ALTER TABLE "navigation_main_nav"
  ADD CONSTRAINT "navigation_main_nav_parent_id_fk"
  FOREIGN KEY ("_parent_id") REFERENCES "navigation"("id") ON DELETE CASCADE;

CREATE INDEX "navigation_main_nav_order_idx" ON "navigation_main_nav" USING btree ("_order");
CREATE INDEX "navigation_main_nav_parent_id_idx" ON "navigation_main_nav" USING btree ("_parent_id");


-- ============================================================================
-- PAYLOAD INTERNAL: payload_locked_documents
-- ============================================================================

CREATE TABLE "payload_locked_documents" (
  "id" serial PRIMARY KEY,
  "global_slug" varchar,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");

-- Relationships join table for locked documents
CREATE TABLE "payload_locked_documents_rels" (
  "id" serial PRIMARY KEY,
  "order" integer,
  "parent_id" integer NOT NULL,
  "path" varchar NOT NULL,
  "users_id" integer,
  "media_id" integer,
  "posts_id" integer,
  "categories_id" integer,
  "authors_id" integer,
  "topic_clusters_id" integer,
  "team_members_id" integer,
  "courses_id" integer,
  "job_positions_id" integer,
  "job_applications_id" integer,
  "membership_signups_id" integer
);

ALTER TABLE "payload_locked_documents_rels"
  ADD CONSTRAINT "payload_locked_documents_rels_parent_fk"
  FOREIGN KEY ("parent_id") REFERENCES "payload_locked_documents"("id") ON DELETE CASCADE;

ALTER TABLE "payload_locked_documents_rels"
  ADD CONSTRAINT "payload_locked_documents_rels_users_id_fk"
  FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE;

ALTER TABLE "payload_locked_documents_rels"
  ADD CONSTRAINT "payload_locked_documents_rels_media_id_fk"
  FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE CASCADE;

ALTER TABLE "payload_locked_documents_rels"
  ADD CONSTRAINT "payload_locked_documents_rels_posts_id_fk"
  FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE CASCADE;

ALTER TABLE "payload_locked_documents_rels"
  ADD CONSTRAINT "payload_locked_documents_rels_categories_id_fk"
  FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE CASCADE;

ALTER TABLE "payload_locked_documents_rels"
  ADD CONSTRAINT "payload_locked_documents_rels_authors_id_fk"
  FOREIGN KEY ("authors_id") REFERENCES "authors"("id") ON DELETE CASCADE;

ALTER TABLE "payload_locked_documents_rels"
  ADD CONSTRAINT "payload_locked_documents_rels_topic_clusters_id_fk"
  FOREIGN KEY ("topic_clusters_id") REFERENCES "topic_clusters"("id") ON DELETE CASCADE;

ALTER TABLE "payload_locked_documents_rels"
  ADD CONSTRAINT "payload_locked_documents_rels_team_members_id_fk"
  FOREIGN KEY ("team_members_id") REFERENCES "team_members"("id") ON DELETE CASCADE;

ALTER TABLE "payload_locked_documents_rels"
  ADD CONSTRAINT "payload_locked_documents_rels_courses_id_fk"
  FOREIGN KEY ("courses_id") REFERENCES "courses"("id") ON DELETE CASCADE;

ALTER TABLE "payload_locked_documents_rels"
  ADD CONSTRAINT "payload_locked_documents_rels_job_positions_id_fk"
  FOREIGN KEY ("job_positions_id") REFERENCES "job_positions"("id") ON DELETE CASCADE;

ALTER TABLE "payload_locked_documents_rels"
  ADD CONSTRAINT "payload_locked_documents_rels_job_applications_id_fk"
  FOREIGN KEY ("job_applications_id") REFERENCES "job_applications"("id") ON DELETE CASCADE;

ALTER TABLE "payload_locked_documents_rels"
  ADD CONSTRAINT "payload_locked_documents_rels_membership_signups_id_fk"
  FOREIGN KEY ("membership_signups_id") REFERENCES "membership_signups"("id") ON DELETE CASCADE;

CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");


-- ============================================================================
-- PAYLOAD INTERNAL: payload_preferences
-- ============================================================================

CREATE TABLE "payload_preferences" (
  "id" serial PRIMARY KEY,
  "key" varchar,
  "value" jsonb,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");

CREATE TABLE "payload_preferences_rels" (
  "id" serial PRIMARY KEY,
  "order" integer,
  "parent_id" integer NOT NULL,
  "path" varchar NOT NULL,
  "users_id" integer
);

ALTER TABLE "payload_preferences_rels"
  ADD CONSTRAINT "payload_preferences_rels_parent_fk"
  FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE CASCADE;

ALTER TABLE "payload_preferences_rels"
  ADD CONSTRAINT "payload_preferences_rels_users_id_fk"
  FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE;

CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");


-- ============================================================================
-- PAYLOAD INTERNAL: payload_migrations
-- ============================================================================

CREATE TABLE "payload_migrations" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "batch" numeric,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");


-- ============================================================================
-- DEFERRED FOREIGN KEYS (circular dependencies)
-- ============================================================================

-- posts.topic_cluster_id -> topic_clusters (posts created before topic_clusters)
ALTER TABLE "posts"
  ADD CONSTRAINT "posts_topic_cluster_id_fk"
  FOREIGN KEY ("topic_cluster_id") REFERENCES "topic_clusters"("id") ON DELETE SET NULL;
