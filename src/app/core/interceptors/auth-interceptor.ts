import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NotificationService } from '../../shared/utils/notification';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const notifier = inject(NotificationService);

  return next(req).pipe(
    catchError((error) => {
      let msg = 'Error desconocido en la solicitud HTTP';

      if (error.status === 0) {
        msg = 'No se puede contactar al servidor. Verifique su conexión.';
      } else if (error.status >= 400 && error.status < 500) {
        msg = `Error del cliente (HTTP ${error.status}): ${error.error?.status_message || error.message}`;
      } else if (error.status >= 500) {
        msg = `Error del servidor (HTTP ${error.status}).`;
      }

      notifier.showError(msg);
      return throwError(() => error);
    })
  );
};
