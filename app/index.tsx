import React, { useState } from 'react';
import { Redirect } from 'expo-router';

export default function index() {
 // redireciona pra tela princpial (login)
    return <Redirect href={'/Login'}/>;

      }
    