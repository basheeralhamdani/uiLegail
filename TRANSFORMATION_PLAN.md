# Transformation Plan: uiLegail to a Michigan-Based Document Drafting Marketplace

This document outlines the plan to transform the `uiLegail` application into a Michigan-based document drafting marketplace, inspired by getsnug.com.

## 1. Foundational Changes: Multi-Tenancy and B2B Focus

The most significant change is to shift from a single-tenant application to a multi-tenant platform that can serve multiple businesses.

- **Task 1.1: Database Schema for Multi-Tenancy:**
  - Modify the Supabase database schema to support multi-tenancy. This typically involves adding a `tenant_id` or `organization_id` to all relevant tables.
  - Each business on the platform will be a "tenant" with its own set of clients, matters, and users.
- **Task 1.2: Tenant-Aware API:**
  - Update the API (or Supabase queries) to be tenant-aware. All database queries must be scoped to the current user's tenant.
- **Task 1.3: User Roles and Permissions:**
  - Implement a role-based access control (RBAC) system. At a minimum, you'll need roles like "Admin" (for the business owner) and "Agent" (for team members).
- **Task 1.4: Business Onboarding:**
  - Create a signup and onboarding process for new businesses. This will involve creating a new tenant in the database and setting up the initial admin user.

## 2. Michigan-Specific Focus

To target the Michigan market, you'll need to ensure your document templates and content are tailored to the state.

- **Task 2.1: Michigan-Specific Document Templates:**
  - Review and update all existing document templates to be compliant with Michigan law.
  - Add new templates for common Michigan-specific legal documents.
- **Task 2.2: Michigan-Focused Content:**
  - Create blog posts, guides, and other educational content that is relevant to Michigan residents and businesses.

## 3. Marketplace Features

To create a true marketplace, you'll need to add features for pricing, billing, and marketing.

- **Task 3.1: Pricing and Billing Integration:**
  - Integrate with a payment provider like Stripe to handle subscriptions and per-document fees.
  - Create a pricing page and a billing dashboard for businesses.
- **Task 3.2: Public-Facing Marketing Website:**
  - Create a new public-facing website to market your platform to Michigan-based law firms and other businesses. This will be separate from the main application.
- **Task 3.3: White Labeling:**
  - Implement white labeling features that allow businesses to customize the branding of the platform with their own logo and colors.

## 4. User Experience Enhancements

To compete with services like getsnug.com, you'll need to provide a modern and user-friendly experience.

- **Task 4.1: Redesign the User Interface:**
  - Redesign the UI to be more modern, intuitive, and user-friendly.
- **Task 4.2: Guided Document Drafting:**
  - Enhance the document drafting process with a guided, step-by-step approach.
- **Task 4.3: AI-Powered Features:**
  - Leverage the `@play-ai/agent-web-sdk` to add AI-powered features like document review, clause suggestions, and conversational intake.

## 5. Phased Rollout

This is a significant undertaking, so it's important to roll out the changes in phases.

- **Phase 1: Foundational Changes:** Focus on implementing multi-tenancy and the core B2B features.
- **Phase 2: Michigan-Specific Focus:** Add the Michigan-specific templates and content.
- **Phase 3: Marketplace Features:** Implement the pricing, billing, and marketing features.
- **Phase 4: User Experience Enhancements:** Continuously improve the user experience with UI redesigns and new AI-powered features.
