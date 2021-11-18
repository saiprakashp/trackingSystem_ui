import React from 'react';

export const genericSpinned=(styles)=>{

                    return <div className="col-sm-1">
                            <div className={styles} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>};
