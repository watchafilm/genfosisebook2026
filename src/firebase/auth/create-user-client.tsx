"use client";

import { useEffect } from 'react';
import { createAdminUser } from './create-user';

export default function CreateAdminUser() {
  useEffect(() => {
    createAdminUser();
  }, []);

  return null;
}
