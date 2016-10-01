using System;
using System.Collections.Generic;
using ThreeJS.Models;

namespace ThreeJS.DbContextFactory {
    public class SampleRepository : ISampleRepository, IDisposable {
        Sample ISampleRepository.AddObject(Sample newObject) {
            throw new NotImplementedException();
        }

        void ISampleRepository.DeleteObject(int objectId) {
            throw new NotImplementedException();
        }

        Sample ISampleRepository.GetObjectById(int key) {
            throw new NotImplementedException();
        }

        IEnumerable<Sample> ISampleRepository.GetObjects() {
            throw new NotImplementedException();
        }

        void ISampleRepository.SaveChange() {
            throw new NotImplementedException();
        }

        Sample ISampleRepository.UpdateObejct(Sample currentOject) {
            throw new NotImplementedException();
        }

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing) {
            if (!disposedValue) {
                if (disposing) {
                    // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~ObjectRepository() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        void IDisposable.Dispose() {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }
        #endregion

    }

}