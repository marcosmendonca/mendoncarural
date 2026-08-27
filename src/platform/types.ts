export type UserStatus = 'active' | 'disabled' | 'pending';
export type OrganizationStatus = 'active' | 'disabled';
export type MembershipRole = 'owner' | 'admin' | 'member';

export interface PlatformUser {
  id: string;
  email: string;
  name: string;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  status: OrganizationStatus;
  createdAt: string;
  updatedAt: string;
}

export interface OrganizationMember {
  id: string;
  organizationId: string;
  userId: string;
  role: MembershipRole;
  createdAt: string;
}

export interface PlatformTool {
  key: string;
  name: string;
  description?: string;
  enabled: boolean;
}

export interface ToolEntitlement {
  id: string;
  organizationId: string;
  toolKey: string;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SessionIdentity {
  userId: string;
  organizationId: string;
  role: MembershipRole;
  expiresAt: string;
}

export interface AuditEvent {
  id: string;
  organizationId?: string;
  userId?: string;
  action: string;
  resourceType?: string;
  resourceId?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}
